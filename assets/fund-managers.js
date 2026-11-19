(() => {
    'use strict';

    const assetRoot = new URL('.', document.currentScript.src);
    const referenceDate = '2026-10-09';
    const motilalSource = 'https://www.motilaloswalmf.com/mutual-funds/motilal-oswal-small-cap-fund';
    const profiles = {
        gaurav: {
            name: 'Gaurav Mehta, CFA', role: 'Head, SIF Equity', amc: 'SBI Funds Management', experience: '19+',
            qualifications: 'B.Tech, IIT Bombay\nPGDM, IIM Lucknow\nCFA Charterholder',
            career: 'Edelweiss Capital\nAmbit Capital / Ambit Investment Advisors\nSBI Funds Management, since 2018',
            expertise: 'Equity research, portfolio management, long-short strategies',
            bio: 'His career spans equity research, portfolio management and alternative investments. After joining SBI in 2018, he became CIO, Alternatives Equity in 2021 and managed a long-short alternative fund for nearly three years.',
            source: 'https://www.sbimf.com/magnumsif/equity-ex-top100-longshortfund',
            sourceLabel: 'SBI Mutual Fund', asOf: referenceDate
        },
        ajay: {
            name: 'Ajay Khandelwal', role: 'Head of Equity', amc: 'Motilal Oswal Mutual Fund', experience: '18+',
            qualifications: 'MBA, TAPMI, Manipal\nB.E., Electrical Engineering',
            career: 'BOI AXA Investment Managers\nCanara Robeco Asset Management\nMotilal Oswal Asset Management',
            expertise: 'Small-cap investing, equity research, fund management',
            bio: 'Ajay brings experience in equity research and active fund management. Before joining Motilal Oswal, he managed small-cap investments at Canara Robeco, adding hands-on experience in evaluating smaller businesses.',
            photo: new URL('fund-managers/ajay-khandelwal.png', assetRoot).href,
            source: motilalSource, sourceLabel: 'Motilal Oswal Mutual Fund', asOf: referenceDate
        },
        bhalchandra: {
            name: 'Bhalchandra Shinde', role: 'Fund Manager', amc: 'Motilal Oswal Mutual Fund', experience: '13+',
            qualifications: '', career: 'Centrum Broking / Max Life Insurance\nKotak Mahindra Life Insurance\nMotilal Oswal Asset Management',
            expertise: 'Equity research, sector analysis, company assessment',
            bio: 'His background combines equity research with institutional investment experience. At Kotak Mahindra Life Insurance, his research responsibilities covered sectors including automobiles, oil and gas, and real estate.',
            photo: new URL('fund-managers/bhalchandra-shinde.png', assetRoot).href,
            source: motilalSource, sourceLabel: 'Motilal Oswal Mutual Fund', asOf: '2026-10-17'
        },
        manish: {
            name: 'Manish Gunwani', role: 'Head of Equities', amc: 'Bandhan Mutual Fund', experience: '24+',
            qualifications: 'B.Tech, IIT Madras\nPGDM, IIM Bangalore',
            career: 'ICICI Prudential AMC, Deputy CIO\nNippon India Mutual Fund, CIO Equities\nBandhan Mutual Fund',
            expertise: 'Equity leadership, portfolio construction, company research',
            bio: 'Manish has held senior equity investment roles across major fund houses. He was Deputy CIO at ICICI Prudential AMC before serving as CIO, Equities at Nippon India Mutual Fund from 2017 to 2022.',
            source: 'https://bandhanmutual.com/', sourceLabel: 'Bandhan Mutual Fund', asOf: referenceDate
        },
        kirthi: {
            name: 'Kirthi Jain', role: 'Vice President, Fund Management', amc: 'Bandhan Mutual Fund', experience: '10',
            qualifications: 'Chartered Accountant',
            career: 'Sundaram Mutual Fund, Research Analyst\nCanara HSBC Life Insurance, Assistant Fund Manager\nBandhan Mutual Fund, since 2023',
            expertise: 'Equity research, financial analysis, fund management',
            bio: 'Kirthi combines an accounting qualification with research and fund-management experience. His career includes five years of research at Sundaram Mutual Fund and an assistant fund-manager role at Canara HSBC Life Insurance.',
            source: 'https://bandhanmutual.com/', sourceLabel: 'Bandhan Mutual Fund', asOf: referenceDate
        },
        mihir: {
            name: 'Mihir Vora, CFA', role: 'Chief Investment Officer', amc: 'TRUST Mutual Fund', experience: '30+',
            qualifications: 'PGDM, IIM Lucknow\nCFA Charterholder',
            career: 'Birla Sun Life AMC, CIO Offshore\nMax Life Insurance, CIO, 2014-2023\nTRUST Asset Management',
            expertise: 'Investment leadership, multi-asset experience, portfolio management',
            bio: 'Mihir has worked across mutual funds, insurance and sovereign investment institutions. His background includes CIO roles at Max Life Insurance and the offshore business of Birla Sun Life AMC.',
            source: 'https://www.trustmf.com/', sourceLabel: 'TRUST Mutual Fund', asOf: referenceDate
        },
        saurabh: {
            name: 'Saurabh Kataria', role: 'Head of Equity', amc: 'TRUST Mutual Fund', experience: '20+',
            qualifications: 'MBA, Finance',
            career: 'BOI AXA Mutual Fund\nAxis Max Life Insurance, Senior Fund Manager, 2019-2026\nTRUST Mutual Fund',
            expertise: 'Equity portfolio management, institutional investing',
            bio: 'Saurabh brings experience across mutual funds and insurance portfolios. His career includes a decade of fund management at BOI AXA and a senior fund-manager role at Axis Max Life Insurance.',
            source: 'https://www.trustmf.com/', sourceLabel: 'TRUST Mutual Fund', asOf: referenceDate
        },
        aakash: {
            name: 'Aakash Manghani', role: 'Fund Manager, Equity', amc: 'TRUST Mutual Fund', experience: '15+',
            qualifications: 'MBA, SP Jain School of Global Management',
            career: 'BOI AXA Investment Managers, Research / Fund Management\nICICI Prudential Life Insurance, Fund Manager\nTRUST Mutual Fund',
            expertise: 'Equity research, stock selection, portfolio management',
            bio: 'Aakash has progressed from equity research to portfolio management. Before TRUST, he held fund-management responsibilities at ICICI Prudential Life Insurance and BOI AXA Investment Managers.',
            source: 'https://www.trustmf.com/', sourceLabel: 'TRUST Mutual Fund', asOf: referenceDate
        },
        aditya: {
            name: 'Aditya Khemani', role: 'Fund Manager, Equity', amc: 'Invesco Mutual Fund', experience: '19+',
            qualifications: 'B.Com\nPGDM, IIM Lucknow',
            career: 'HSBC Asset Management\nMotilal Oswal AMC, Fund Manager, 2019-2023\nInvesco Mutual Fund',
            expertise: 'Large- and mid-cap equities, research, portfolio management',
            bio: 'Aditya spent twelve years at HSBC Asset Management and later managed equity schemes at Motilal Oswal AMC. His experience includes managing large- and mid-cap investments before joining Invesco.',
            source: 'https://www.invescomutualfund.com/', sourceLabel: 'Invesco Mutual Fund', asOf: referenceDate
        },
        ankit: {
            name: 'Ankit Agarwal', role: 'Fund Manager', amc: 'Motilal Oswal Mutual Fund', experience: '20+',
            qualifications: '',
            career: 'UTI AMC / Barclays Wealth\nLehman Brothers, London / BNP Paribas, Hong Kong\nD. E. Shaw / Motilal Oswal AMC',
            expertise: 'Equity research, global markets, portfolio management',
            bio: 'Ankit brings experience spanning asset management, equity research and capital markets. His career includes research at UTI AMC and international roles with financial institutions in London and Hong Kong.',
            source: 'https://www.motilaloswalmf.com/about-us', sourceLabel: 'Motilal Oswal Mutual Fund', asOf: referenceDate
        },
        varun: {
            name: 'Varun Sharma', role: 'Fund Manager', amc: 'Motilal Oswal Mutual Fund', experience: '15+',
            qualifications: 'PGDM, IIM Kolkata',
            career: 'ICICI Securities\nFranklin Templeton, Fund Management\nMotilal Oswal Asset Management',
            expertise: 'Equity valuation, technology businesses, fund management',
            bio: 'Varun has experience across securities research and asset management. He spent more than ten years at Franklin Templeton before joining Motilal Oswal, following an earlier role at ICICI Securities.',
            source: 'https://www.motilaloswalmf.com/about-us', sourceLabel: 'Motilal Oswal Mutual Fund', asOf: referenceDate
        }
    };

    const catalogue = [
        { names: ['Magnum Equity Ex Top 100 (SIF)', 'Magnum Equity Ex-Top 100 Long Short Fund'], managers: ['gaurav'] },
        { names: ['Motilal Oswal Small Cap Fund'], managers: ['ajay', 'bhalchandra'] },
        { names: ['Bandhan Small Cap Fund'], managers: ['manish', 'kirthi'] },
        { names: ['TRUSTMF Small Cap Fund', 'TRUST Small Cap Fund'], managers: ['mihir', 'saurabh', 'aakash'] },
        { names: ['Invesco India Large & Mid Cap Fund'], managers: ['aditya'] },
        { names: ['Motilal Oswal Large and Midcap Fund'], managers: ['ajay', 'ankit', 'varun'] }
    ];
    Object.assign(profiles, window.FundManagerLibrary?.profiles || {});
    catalogue.push(...(window.FundManagerLibrary?.catalogue || []));
    Object.entries(window.FundManagerLibrary?.portraits || {}).forEach(([id, portrait]) => {
        if (profiles[id]) {
            profiles[id].photo = new URL(`fund-managers/${portrait.file}`, assetRoot).href;
            profiles[id].photoSource = portrait.source;
        }
    });
    const overrides = new Map();
    const custom = new Map();
    let sequence = 0;
    let selectedFunds = [];
    let activeProfiles = [];
    let lastSignature = '';
    let included = true;
    let editor;
    let pages;

    function escape(value) {
        return String(value || '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
    }

    function normalize(value) {
        return value.toLowerCase().replace(/&/g, ' and ')
            .replace(/\bparag\s+parik\b/g, 'parag parikh').replace(/\bwhite\s+oak\b/g, 'whiteoak')
            .replace(/\btrust\s+(?:mf|mutual\s+fund)\b/g, 'trustmf').replace(/\bjm\s+financ(?:e|ial)(?:\s+mutual\s+fund)?\b/g, 'jm')
            .replace(/\b(sif|direct|regular|plan|growth|idcw|option)\b/g, ' ')
            .replace(/[^a-z0-9]+/g, ' ').replace(/\b(small|mid|large|flexi|multi) cap\b/g, '$1cap').replace(/\s+/g, ' ').trim();
    }

    function positive(input) { return Number(input?.value) > 0; }

    function collectFunds() {
        const funds = new Map();
        function add(value) {
            const name = String(value || '').trim();
            if (name) funds.set(normalize(name), name);
        }
        const isSif = document.body.dataset.proposalKind === 'sif';
        const sipEnabled = positive(document.getElementById(isSif ? 'sipAmount' : 'cSip'));
        if (sipEnabled) {
            document.querySelectorAll('#fundInputs .fund-name').forEach(input => {
                if (positive(input.parentElement.querySelector('.fund-perc'))) add(input.value);
            });
        }
        if (isSif) {
            if (positive(document.getElementById('lumpsumAmount'))) add(document.getElementById('sifName').value || 'Magnum Equity Ex Top 100 (SIF)');
            document.querySelectorAll('.sif-investment-row').forEach(row => {
                if (positive(row.querySelector('.sif-investment-amount'))) add(row.querySelector('.sif-investment-name').value || 'Additional SIF Investment');
            });
            const start = Number(document.getElementById('currentAge').value) || 1;
            const years = document.getElementById('swpEnabled').checked
                ? Math.max(1, Number(document.getElementById('retireAge').value) - start)
                : Number(document.getElementById('horizonYears').value) || 1;
            document.querySelectorAll('.additional-lumpsum-row').forEach(row => {
                const age = Number(row.querySelector('.additional-lumpsum-age').value);
                if (positive(row.querySelector('.additional-lumpsum-amount')) && age >= start && age < start + years) {
                    add(row.querySelector('.additional-lumpsum-fund').value || document.getElementById('sifName').value);
                }
            });
        } else {
            const start = Number(document.getElementById('cAge').value) || 1;
            const years = document.getElementById('swpEnabled').checked
                ? Math.max(1, Number(document.getElementById('cRetireAge').value) - start)
                : Number(document.getElementById('cDur').value) || 1;
            document.querySelectorAll('.transaction-type').forEach(input => {
                const row = input.parentElement;
                const age = Number(row.querySelector('.transaction-age').value);
                if (input.value === 'injection' && positive(row.querySelector('.transaction-amount')) && positive(row.querySelector('.transaction-allocation')) && age >= start && age < start + years) {
                    add(row.querySelector('.transaction-fund-name').value);
                }
            });
        }
        return [...funds].map(([key, name]) => ({ key, name }));
    }

    function selectManager(entry) {
        if (!entry) return null;
        const component = entry.component || 'equity';
        const candidates = entry.managers.filter(id => profiles[id] && (profiles[id].components || ['equity']).includes(component));
        // Compare experience only among managers responsible for the relevant component.
        return candidates.reduce((best, id) => {
            const experience = parseFloat(profiles[id].experience) || 0;
            const bestExperience = best ? parseFloat(profiles[best].experience) || 0 : -1;
            return experience > bestExperience ? id : best;
        }, null);
    }

    function buildProfiles() {
        const result = new Map();
        const customByFund = new Map([...custom].map(([id, profile]) => [profile.fundKey, { id, profile }]));
        selectedFunds.forEach(fund => {
            const manual = customByFund.get(fund.key);
            if (manual) {
                result.set(manual.id, { id: manual.id, ...manual.profile, funds: [fund.name] });
                return;
            }
            const entry = catalogue.find(item => item.names.some(name => normalize(name) === fund.key));
            const id = selectManager(entry);
            if (!id) return;
            if (!result.has(id)) result.set(id, { id, ...profiles[id], ...overrides.get(id), funds: [] });
            result.get(id).funds.push(fund.name);
        });
        return [...result.values()];
    }

    function field(label, key, value, options = {}) {
        const common = `data-field="${key}" maxlength="${options.max || 160}"`;
        const control = options.multiline
            ? `<textarea ${common} rows="3">${escape(value)}</textarea>`
            : `<input ${common} type="${options.type || 'text'}" value="${escape(value)}">`;
        return `<label class="fm-field">${label}${control}</label>`;
    }

    function renderEditors() {
        const fields = editor.querySelector('.fm-editors');
        fields.innerHTML = activeProfiles.map(profile => `
            <details data-profile="${profile.id}">
                <summary>${escape(profile.name || 'New fund manager')}</summary>
                <div class="fm-form">
                    <div class="fm-toolbar">
                        <label class="fm-toggle"><input type="checkbox" data-field="include" ${profile.include !== false ? 'checked' : ''}> Include profile</label>
                        ${custom.has(profile.id) ? '<button class="fm-icon-button" type="button" data-action="remove" title="Remove manager" aria-label="Remove manager"><i class="fa fa-trash" aria-hidden="true"></i></button>' : ''}
                    </div>
                    ${custom.has(profile.id) ? `<label class="fm-field">Proposed Fund<select data-field="fundKey">${selectedFunds.map(fund => `<option value="${escape(fund.key)}" ${fund.key === profile.fundKey ? 'selected' : ''} ${[...custom].some(([id, manager]) => id !== profile.id && manager.fundKey === fund.key) ? 'disabled' : ''}>${escape(fund.name)}</option>`).join('')}</select></label>` : ''}
                    ${custom.has(profile.id) ? `<label class="fm-field">Load Manager Profile<select data-manager-preset><option value="">Custom Profile</option>${managerOptions()}</select></label>` : ''}
                    ${field('Manager Name', 'name', profile.name, { max: 80 })}
                    ${field('Role / Designation', 'role', profile.role, { max: 100 })}
                    ${field('Fund House', 'amc', profile.amc, { max: 100 })}
                    <div class="fm-form-pair">${field('Experience (Years)', 'experience', profile.experience, { max: 12 })}${field('Profile As Of', 'asOf', profile.asOf, { type: 'date' })}</div>
                    ${field('Career Summary', 'bio', profile.bio, { multiline: true, max: 450 })}
                    ${field('Career Background', 'career', profile.career, { multiline: true, max: 250 })}
                    ${field('Qualifications', 'qualifications', profile.qualifications, { multiline: true, max: 200 })}
                    ${field('Areas of Expertise', 'expertise', profile.expertise, { max: 180 })}
                    ${field('Source URL', 'source', profile.source, { type: 'url', max: 500 })}
                    ${field('Source Name', 'sourceLabel', profile.sourceLabel, { max: 100 })}
                    <div class="fm-field">Portrait<div class="fm-photo-actions"><input type="file" data-photo accept="image/png,image/jpeg,image/webp" aria-label="Upload manager portrait"><button type="button" class="fm-icon-button" data-action="clear-photo" title="Remove portrait" aria-label="Remove portrait"><i class="fa fa-times" aria-hidden="true"></i></button></div></div>
                    <p class="fm-photo-error fm-status" role="status"></p>
                </div>
            </details>`).join('');
        const missing = selectedFunds.filter(fund => !activeProfiles.some(profile => profile.funds.includes(fund.name)));
        const status = editor.querySelector('.fm-status');
        status.textContent = selectedFunds.length
            ? `${activeProfiles.length} manager profiles / ${selectedFunds.length} proposed funds`
            : 'No investments selected.';
        const missingNode = editor.querySelector('.fm-missing');
        missingNode.textContent = missing.length ? `Add manager details for: ${missing.map(item => item.name).join(', ')}` : '';
        missingNode.hidden = !missing.length;
        editor.querySelector('.fm-add').disabled = !selectedFunds.some(fund => ![...custom.values()].some(profile => profile.fundKey === fund.key));
    }

    function managerOptions() {
        const houses = new Map();
        Object.entries(profiles).forEach(([id, profile]) => {
            if (!houses.has(profile.amc)) houses.set(profile.amc, []);
            houses.get(profile.amc).push({ id, name: profile.name });
        });
        return [...houses].sort(([a], [b]) => a.localeCompare(b)).map(([amc, managers]) => `<optgroup label="${escape(amc)}">${managers.sort((a, b) => a.name.localeCompare(b.name)).map(manager => `<option value="${manager.id}">${escape(manager.name)}</option>`).join('')}</optgroup>`).join('');
    }

    function attachFundSuggestions() {
        document.querySelectorAll('#fundInputs .fund-name, #sifName, .sif-investment-name, .additional-lumpsum-fund, .transaction-fund-name').forEach(input => {
            input.setAttribute('list', 'fundManagerFundOptions');
        });
    }

    function safeUrl(value) {
        try {
            const url = new URL(value);
            return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
        } catch { return ''; }
    }

    function readableDate(value) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return '';
        return new Date(`${value}T12:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    function renderProfile(profile) {
        const initials = profile.name.replace(/,.*$/, '').split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('');
        const source = safeUrl(profile.source);
        const photoSource = profile.photo?.startsWith(assetRoot.href) ? safeUrl(profile.photoSource) : '';
        const date = readableDate(profile.asOf);
        const photo = profile.photo && (/^data:image\/(png|jpeg|webp);base64,/.test(profile.photo) || profile.photo.startsWith(assetRoot.href)) ? profile.photo : '';
        return `<article class="fm-profile">
            <div class="fm-profile-head">
                <div class="fm-portrait"><span class="fm-initials" aria-hidden="true">${escape(initials)}</span>${photo ? `<img src="${escape(photo)}" alt="${escape(profile.name)}" loading="eager">` : ''}</div>
                <div><h3>${escape(profile.name)}</h3>${profile.role ? `<p class="fm-role">${escape(profile.role)}</p>` : ''}${profile.amc ? `<p class="fm-amc">${escape(profile.amc)}</p>` : ''}</div>
                ${profile.experience ? `<div class="fm-experience"><strong>${escape(profile.experience)}</strong><span>years of<br>experience</span></div>` : ''}
            </div>
            <div class="fm-funds"><div class="fm-label">In Your Proposed Portfolio</div><p>${profile.funds.map(escape).join('<br>')}</p></div>
            ${profile.bio ? `<p class="fm-bio">${escape(profile.bio)}</p>` : ''}
            <div class="fm-profile-details">
                ${profile.career ? `<div><p class="fm-label">Career Background</p><p class="fm-detail-copy">${escape(profile.career)}</p></div>` : ''}
                ${profile.qualifications ? `<div><p class="fm-label">Qualifications</p><p class="fm-detail-copy">${escape(profile.qualifications)}</p></div>` : ''}
            </div>
            ${profile.expertise ? `<p class="fm-expertise">${escape(profile.expertise)}</p>` : ''}
            ${source || date || (photo && photoSource) ? `<p class="fm-source">${source ? `<a href="${escape(source)}" target="_blank" rel="noopener noreferrer">${escape(profile.sourceLabel || 'Profile source')}</a>` : ''}${source && date ? ' / ' : ''}${date ? `Profile as of ${escape(date)}` : ''}${photo && photoSource ? `${source || date ? ' / ' : ''}<a href="${escape(photoSource)}" target="_blank" rel="noopener noreferrer">Official portrait source</a>` : ''}</p>` : ''}
        </article>`;
    }

    function renderPages() {
        const shown = activeProfiles.filter(profile => profile.include !== false && profile.name.trim());
        pages.hidden = !included || !shown.length;
        if (pages.hidden) { pages.innerHTML = ''; return; }
        const totalPages = Math.ceil(shown.length / 2);
        pages.innerHTML = Array.from({ length: totalPages }, (_, pageIndex) => `<section class="fm-page">
            <header class="fm-page-heading">
                <p class="fm-eyebrow"><span>Your Investment Team</span><span>Ideas2Invest / ${pageIndex + 1} of ${totalPages}</span></p>
                <h2>The experience behind your investments</h2>
                ${pageIndex === 0 ? '<p class="fm-page-intro">Beyond the fund name are the people making investment decisions. Meet the managers whose research and experience shape the funds in your proposed portfolio.</p>' : ''}
            </header>
            ${shown.slice(pageIndex * 2, pageIndex * 2 + 2).map(renderProfile).join('')}
            <footer class="fm-page-footer">Selected fund-manager profiles. Experience is as stated in the source material on the dates shown; management responsibilities may change.
                ${pageIndex === totalPages - 1 ? `<p class="fm-copyright">Copyright &copy; Ideas2invest ${new Date().getFullYear()} &bull; AMFI-registered Mutual Funds Distributor &bull; ARN-113588</p>` : ''}
            </footer>
        </section>`).join('');
        pages.querySelectorAll('img').forEach(image => image.addEventListener('error', () => image.remove(), { once: true }));
    }

    function saveField(id, key, value) {
        const target = custom.has(id) ? custom.get(id) : overrides.get(id) || {};
        target[key] = value;
        if (!custom.has(id)) overrides.set(id, target);
        activeProfiles = buildProfiles();
        renderPages();
    }

    function refresh() {
        if (!editor || !pages) return;
        selectedFunds = collectFunds();
        attachFundSuggestions();
        const signature = JSON.stringify(selectedFunds);
        activeProfiles = buildProfiles();
        if (signature !== lastSignature) {
            lastSignature = signature;
            renderEditors();
        }
        renderPages();
    }

    function initialize() {
        editor = document.getElementById('fundManagerEditor');
        pages = document.getElementById('fundManagerPages');
        if (!editor || !pages) return;
        editor.className = 'fm-editor no-print';
        pages.className = 'fm-pages';
        editor.innerHTML = `<div class="fm-toolbar"><h3>Fund Manager Profiles</h3><label class="fm-toggle"><input type="checkbox" data-include-page checked aria-label="Include fund manager pages"> Include</label></div>
            <div data-editor-body><p class="fm-status"></p><p class="fm-missing fm-status fm-warning" hidden></p><div class="fm-editors"></div><button type="button" class="fm-add"><i class="fa fa-user-plus" aria-hidden="true"></i> Add Fund Manager</button></div>`;
        const suggestions = document.createElement('datalist');
        suggestions.id = 'fundManagerFundOptions';
        suggestions.innerHTML = [...new Set(catalogue.flatMap(entry => entry.names))].sort().map(name => `<option value="${escape(name)}"></option>`).join('');
        editor.appendChild(suggestions);
        editor.addEventListener('input', event => {
            if (event.target.matches('[data-include-page]')) {
                included = event.target.checked;
                editor.querySelector('[data-editor-body]').hidden = !included;
                renderPages();
                return;
            }
            const details = event.target.closest('[data-profile]');
            const key = event.target.dataset.field;
            if (details && key) {
                if (key === 'fundKey' && [...custom].some(([id, profile]) => id !== details.dataset.profile && profile.fundKey === event.target.value)) {
                    event.target.value = custom.get(details.dataset.profile).fundKey;
                    return;
                }
                saveField(details.dataset.profile, key, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
                if (key === 'name') details.querySelector('summary').textContent = event.target.value || 'New fund manager';
                if (key === 'fundKey') {
                    renderEditors();
                    editor.querySelector(`[data-profile="${details.dataset.profile}"]`).open = true;
                }
            }
        });
        editor.addEventListener('click', event => {
            if (event.target.closest('.fm-add')) {
                const fund = selectedFunds.find(fund => ![...custom.values()].some(profile => profile.fundKey === fund.key));
                if (!fund) return;
                const id = `custom-${++sequence}`;
                const entry = catalogue.find(item => item.names.some(name => normalize(name) === fund.key));
                const defaultId = selectManager(entry);
                custom.set(id, { name: '', role: '', amc: '', experience: '', bio: '', career: '', qualifications: '', expertise: '', source: '', asOf: '', ...profiles[defaultId], ...overrides.get(defaultId), fundKey: fund.key, include: true });
                activeProfiles = buildProfiles();
                renderEditors();
                renderPages();
                const details = editor.querySelector(`[data-profile="${id}"]`);
                details.open = true;
                details.querySelector('[data-field="name"]').focus();
            }
            const action = event.target.closest('[data-action]');
            if (!action) return;
            const id = action.closest('[data-profile]').dataset.profile;
            if (action.dataset.action === 'remove') {
                custom.delete(id);
                activeProfiles = buildProfiles();
                renderEditors();
                renderPages();
            } else if (action.dataset.action === 'clear-photo') {
                saveField(id, 'photo', '');
                action.closest('[data-profile]').querySelector('[data-photo]').value = '';
            }
        });
        editor.addEventListener('change', async event => {
            if (event.target.matches('[data-manager-preset]')) {
                const details = event.target.closest('[data-profile]');
                const preset = profiles[event.target.value];
                const current = custom.get(details.dataset.profile);
                if (preset && current) {
                    custom.set(details.dataset.profile, { ...preset, fundKey: current.fundKey, include: current.include });
                    activeProfiles = buildProfiles();
                    renderEditors();
                    editor.querySelector(`[data-profile="${details.dataset.profile}"]`).open = true;
                    renderPages();
                }
                return;
            }
            if (!event.target.matches('[data-photo]')) return;
            const details = event.target.closest('[data-profile]');
            const file = event.target.files[0];
            const error = details.querySelector('.fm-photo-error');
            error.textContent = '';
            if (!file) return;
            if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024) {
                error.textContent = 'Choose a JPG, PNG or WebP image under 5 MB.';
                event.target.value = '';
                return;
            }
            try {
                const photo = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
                saveField(details.dataset.profile, 'photo', photo);
            } catch { error.textContent = 'The image could not be loaded. Choose another file.'; }
        });
        lastSignature = '__initial__';
        refresh();
    }

    window.FundManagerProfiles = { refresh };
    document.addEventListener('DOMContentLoaded', initialize);
})();
