document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('courseForm');
    const submitBtn = document.getElementById('submitBtn');
    const resultArea = document.getElementById('resultArea');
    const selectEstado = document.getElementById('estadoUnidade');
    const selectMunicipio = document.getElementById('municipioUnidade');
    const selectUnidade = document.getElementById('unidadeEscolar');

    let dadosUnidades = { estados: [], opcaoOutra: 'Outra (informar em observações)' };

    // Carrega unidades SENAI por estado/município.
    // No demo, os dados vêm de assets/data/unidades-senai.js (window.UNIDADES_SENAI),
    // o que funciona tanto via http quanto abrindo o arquivo localmente (sem fetch/CORS).
    try {
        if (window.UNIDADES_SENAI && Array.isArray(window.UNIDADES_SENAI.estados)) {
            dadosUnidades = window.UNIDADES_SENAI;
        } else {
            const res = await fetch('assets/data/unidades-senai.json');
            if (res.ok) {
                const data = await res.json();
                if (data.estados && Array.isArray(data.estados)) dadosUnidades = data;
            }
        }
    } catch (e) {
        console.warn('Lista de unidades não carregada.', e);
    }

    // Preenche select de estado
    if (selectEstado) {
        selectEstado.innerHTML = '<option value="" disabled selected>Selecione o estado</option>' +
            dadosUnidades.estados.map((e, i) => `<option value="${i}">${e.nome} (${e.sigla})</option>`).join('');
    }

    function esc(s) {
        return (s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    }

    selectEstado.addEventListener('change', function () {
        const idx = parseInt(this.value, 10);
        selectMunicipio.disabled = true;
        selectMunicipio.innerHTML = '<option value="" disabled selected>Selecione o município</option>';
        selectUnidade.disabled = true;
        selectUnidade.innerHTML = '<option value="" disabled selected>Selecione primeiro o município</option>';
        if (isNaN(idx) || idx < 0 || !dadosUnidades.estados[idx]) return;
        const municipios = dadosUnidades.estados[idx].municipios || [];
        selectMunicipio.innerHTML = '<option value="" disabled selected>Selecione o município</option>' +
            municipios.map((m, i) => `<option value="${i}">${esc(m.nome)}</option>`).join('');
        selectMunicipio.disabled = false;
    });

    selectMunicipio.addEventListener('change', function () {
        const estadoIdx = parseInt(selectEstado.value, 10);
        const munIdx = parseInt(this.value, 10);
        selectUnidade.disabled = true;
        selectUnidade.innerHTML = '<option value="" disabled selected>Selecione a unidade</option>';
        if (isNaN(estadoIdx) || isNaN(munIdx) || !dadosUnidades.estados[estadoIdx]) return;
        const municipios = dadosUnidades.estados[estadoIdx].municipios || [];
        const mun = municipios[munIdx];
        if (!mun || !mun.unidades) return;
        const unidades = mun.unidades.concat(dadosUnidades.opcaoOutra || 'Outra (informar em observações)');
        selectUnidade.innerHTML = '<option value="" disabled selected>Selecione a unidade</option>' +
            unidades.map(u => `<option value="${esc(u)}">${esc(u)}</option>`).join('');
        selectUnidade.disabled = false;
    });

    // URL do servidor backend
    // const backendUrl = 'http://localhost:3000/gerar-plano';

    // ==========================================================
    // MODO DEMONSTRAÇÃO
    // Esta é uma versão somente-front para o portfólio: não há
    // back-end nem chamada ao Gemini. O envio simula o processo
    // real e exibe uma mensagem explicativa ao final.
    // ==========================================================
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        submitBtn.disabled = true;
        submitBtn.textContent = 'Processando...';
        resultArea.classList.remove('hidden');
        resultArea.innerHTML = `<div class="loader" id="progress-text">Aguarde</div>`;
        const progressTextElement = document.getElementById('progress-text');

        const etapas = [
            'Conexão estabelecida. A iniciar o processo...',
            'A analisar a documentação da Unidade Curricular...',
            'A extrair conhecimentos e capacidades técnicas...',
            'A consultar a IA Generativa (Gemini)...',
            'A calcular o cronograma de aulas...',
            'A montar a planilha no Google Sheets...'
        ];

        const wait = (ms) => new Promise(r => setTimeout(r, ms));
        for (const etapa of etapas) {
            if (progressTextElement) progressTextElement.textContent = etapa;
            await wait(750);
        }

        const nomeCurso = (document.getElementById('courseName')?.value || 'o seu curso').trim() || 'o seu curso';
        resultArea.innerHTML = `
            <div style="text-align: center; padding: 8px;">
                <h2 style="color: #1e8e3e;">✅ Demonstração concluída</h2>
                <p>Nesta versão de portfólio, o plano de <strong>${esc(nomeCurso)}</strong> não é gerado de verdade.</p>
                <p style="color:#555; font-size: 0.95em; max-width: 520px; margin: 10px auto 0;">
                    Na aplicação real, aqui seria criada automaticamente uma planilha Google Sheets
                    completa e formatada, usando a IA Generativa do Google (Gemini) e o Google Workspace.
                </p>
            </div>`;

        submitBtn.disabled = false;
        submitBtn.textContent = 'Gerar Plano de Curso';
    });
});
