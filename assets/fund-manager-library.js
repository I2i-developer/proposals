(() => {
    'use strict';

    // Keep source dates with each snapshot; do not infer appointments from an AMC name.
    const sources = {
        invesco: 'https://www.invescomutualfund.com/docs/default-source/factsheet/invesco-mf-factsheet-april-2026.pdf',
        hsbc: 'https://www.assetmanagement.hsbc.co.in/assets/documents/mutual-funds/en/bdbc1cbb-fe09-4ec2-8680-62857249a5ea/the-asset-may-2026.pdf',
        bandhan: 'https://storage.googleapis.com/nonprod-static-assets-121to59kaawfgfi7bol/2026/03/bc09218f-bandhan-performance-table-feb-2026.pdf',
        abakkus: 'https://www.abakkusmf.com/team.html',
        edelweiss: 'https://www.edelweissmf.com/Files/downloads/Product%20Collateral/Presentation/2025/Mar/published/Edelweiss_Flexi-Cap_Fund-Mar_25_19032025_032716_PM.pdf',
        whiteoak: 'https://www.sebi.gov.in/sebi_data/attachdocs/may-2026/1778575486746.pdf',
        jm: 'https://www.jmfinancialmf.com/CMS/downloads/Factsheet/Factsheet/Factsheet%20June%202026.pdf'
    };

    function profile(amc, source, asOf, details) {
        return { amc, source, asOf, sourceLabel: amc, qualifications: '', career: '', expertise: '', bio: '', ...details };
    }

    const profiles = {
        taher: profile('Invesco Mutual Fund', sources.invesco, '2026-04-30', {
            name: 'Taher Badshah', role: 'Chief Investment Officer', experience: '31',
            qualifications: 'B.E., Electronics\nMMS, Finance',
            career: 'ICICI Prudential AMC / Kotak Investment Advisors\nMotilal Oswal AMC\nInvesco Asset Management',
            expertise: 'Equity research, portfolio management, investment leadership',
            bio: 'Taher has worked across equity research and portfolio management. Before joining Invesco, he led equities at Motilal Oswal AMC and held portfolio-management roles at Kotak Investment Advisors and ICICI Prudential AMC.'
        }),
        hiten: profile('Invesco Mutual Fund', sources.invesco, '2026-04-30', {
            name: 'Hiten Jain', role: 'Fund Manager, Equity', experience: '17',
            career: 'Invesco Asset Management', expertise: 'Large-cap equities, sector research, portfolio management',
            bio: 'Hiten manages Invesco India Largecap Fund. His responsibilities also include equity fund management within Invesco\'s investment team.'
        }),
        venugopal: profile('HSBC Mutual Fund', sources.hsbc, '2026-05-31', {
            name: 'Venugopal Manghat', role: 'Chief Investment Officer, Equity', experience: '31+',
            career: 'HSBC Asset Management India', expertise: 'Equity leadership, small-cap investing',
            bio: 'Venugopal leads HSBC\'s equity investment team and manages its Small Cap Fund. His background brings several decades of equity investment experience to the portfolio.'
        }),
        cheenu: profile('HSBC Mutual Fund', sources.hsbc, '2026-05-31', {
            name: 'Cheenu Gupta', role: 'Senior Vice President & Fund Manager, Equity', experience: '20',
            qualifications: 'PGDBM, S.P. Jain, Mumbai\nB.E., Information Technology\nCFA Charterholder',
            career: 'UTI / ING Investment Management\nTata AIA Life / Canara Robeco AMC\nL&T Investment Management / HSBC',
            expertise: 'Mid-cap investing, equity research, fund management',
            bio: 'Cheenu\'s career combines research and fund-management roles across asset management and insurance. She joined HSBC with the L&T investment team and manages mid-cap and large-and-mid-cap portfolios.'
        }),
        hsbcAbhishek: profile('HSBC Mutual Fund', sources.hsbc, '2026-05-31', {
            name: 'Abhishek Gupta', role: 'Senior Vice President & Fund Manager, Equity', experience: '20',
            career: 'HSBC Asset Management India', expertise: 'Diversified equities, flexi-cap portfolios',
            bio: 'Abhishek manages HSBC Flexi Cap Fund\'s equity portfolio. His role covers investment decisions across companies of different market sizes.'
        }),
        neelotpal: profile('HSBC Mutual Fund', sources.hsbc, '2026-05-31', {
            name: 'Neelotpal Sahai', role: 'Director, Indian Equities & Head, Offshore Advisory', experience: '30+',
            career: 'HSBC Asset Management India', expertise: 'Indian equities, large-cap portfolios, offshore advisory',
            bio: 'Neelotpal brings long-standing Indian equity-market experience to HSBC\'s investment team. He manages HSBC Large Cap Fund and holds responsibility for offshore advisory.'
        }),
        mayank: profile('HSBC Mutual Fund', sources.hsbc, '2026-05-31', {
            name: 'Mayank Chaturvedi', role: 'Fund Manager, Overseas Investments', experience: '5',
            career: 'HSBC Asset Management India', expertise: 'Overseas securities, international investment exposure',
            bio: 'Mayank is the designated manager for overseas securities in HSBC schemes, where applicable. His responsibility is the foreign-investment component, distinct from the domestic equity portfolio.'
        }),
        ritu: profile('Bandhan Mutual Fund', sources.bandhan, '2026-02-28', {
            name: 'Ritu Modi', role: 'Fund Manager, Equity',
            career: 'Bandhan Asset Management', expertise: 'Mid-cap equities, active portfolio management',
            bio: 'Ritu manages Bandhan Midcap Fund\'s equity portfolio. The role focuses on investment decisions within the scheme\'s mid-cap mandate.'
        }),
        viraj: profile('Bandhan Mutual Fund', sources.bandhan, '2026-02-28', {
            name: 'Viraj Kulkarni', role: 'Fund Manager, Equity',
            career: 'Bandhan Asset Management', expertise: 'Diversified equities, flexi-cap portfolios',
            bio: 'Viraj co-manages Bandhan Flexi Cap Fund. His fund-management responsibilities include diversified equity and hybrid mandates at Bandhan.'
        }),
        rajeev: profile('PPFAS Mutual Fund', 'https://amc.ppfas.com/schemes/fund-managers/', '2026-10-17', {
            name: 'Rajeev Thakkar', role: 'Chief Investment Officer, Equity & Director', experience: '30+',
            career: 'Investment career began in 1994\nPPFAS, since 2001\nPPFAS Mutual Fund',
            expertise: 'Equity investing, portfolio management, investment leadership',
            bio: 'Rajeev\'s career spans investment management and financial markets. He joined PPFAS in 2001, managed its portfolio-management strategy, and helped launch the mutual fund\'s flagship equity scheme in 2013.'
        }),
        raunak: profile('PPFAS Mutual Fund', 'https://amc.ppfas.com/about-us/management/raunak-onkar/', '2026-10-17', {
            name: 'Raunak Onkar', role: 'Fund Manager & Head of Research',
            qualifications: 'B.Sc., Information Technology\nMMS, Finance, University of Mumbai',
            career: 'PPFAS research team, since 2008\nPPFAS Mutual Fund',
            expertise: 'Company research, international equities, fund management',
            bio: 'Raunak joined PPFAS\'s research team as an intern in 2008 and progressed to head of research and fund manager. He manages the foreign-equity component of the Flexi Cap Fund.'
        }),
        rajMehta: profile('PPFAS Mutual Fund', 'https://amc.ppfas.com/about-us/management/raj-mehta/', '2026-10-17', {
            name: 'Raj Mehta', role: 'Executive Vice President & Fund Manager, Equity',
            qualifications: 'B.Com, N.M. College\nFellow Chartered Accountant\nCFA Charterholder',
            career: 'PPFAS Mutual Fund, since 2012', expertise: 'Investment research, equity fund management',
            bio: 'Raj began his career with PPFAS in 2012 and progressed into fund management. His professional qualifications combine accounting and investment analysis.'
        }),
        rukun: profile('PPFAS Mutual Fund', 'https://amc.ppfas.com/about-us/management/rukun-tarachandani/', '2026-10-17', {
            name: 'Rukun Tarachandani', role: 'Executive Vice President & Fund Manager, Equity', experience: '10+',
            career: 'Goldman Sachs, Equity Research\nKotak Mahindra Asset Management\nPPFAS Mutual Fund',
            expertise: 'Equity research, small- and mid-cap businesses, special situations',
            bio: 'Rukun began in equity research at Goldman Sachs in 2013. His subsequent work at Kotak Mahindra AMC covered smaller companies and special situations before he joined PPFAS.'
        }),
        vinit: profile('DSP Mutual Fund', 'https://www.dspim.com/invest/mutual-fund-schemes/equity-funds/mid-cap-fund/dspsm-direct-growth', '2026-10-17', {
            name: 'Vinit Sambre', role: 'Head, Equities', experience: '28',
            career: 'DSP Asset Managers', expertise: 'Small- and mid-cap equities, investment leadership',
            bio: 'Vinit heads equities at DSP. He has managed DSP Small Cap Fund since June 2010 and DSP Mid Cap Fund since July 2012.'
        }),
        dspAbhishek: profile('DSP Mutual Fund', 'https://www.dspim.com/invest/mutual-fund-schemes/equity-funds/mid-cap-fund/dspsm-direct-growth', '2026-10-17', {
            name: 'Abhishek Ghosh', role: 'Fund Manager, Equity', experience: '18',
            career: 'DSP Asset Managers', expertise: 'Equity research, mid-cap portfolios',
            bio: 'Abhishek co-manages DSP Mid Cap Fund and has held this responsibility since September 2022. His role combines company analysis and portfolio-management decisions.'
        }),
        bhavin: profile('DSP Mutual Fund', 'https://www.dspim.com/invest/mutual-fund-schemes/equity-funds/flexi-cap-fund/dspeq-direct-growth', '2026-10-17', {
            name: 'Bhavin Gandhi', role: 'Fund Manager, Equity', experience: '22',
            career: 'DSP Asset Managers, joined in 2021\nAlternative investment and mutual fund mandates',
            expertise: 'Equity research, diversified portfolio management',
            bio: 'Bhavin manages DSP Flexi Cap Fund, a responsibility held since March 2024. His DSP background includes alternative-investment fund management before taking charge of the flexi-cap portfolio.'
        }),
        sanjay: profile('Abakkus Mutual Fund', sources.abakkus, '2026-10-17', {
            name: 'Sanjay Doshi, CFA', role: 'Head, Investments, Mutual Fund', experience: '20+',
            qualifications: 'Chartered Accountant\nMBA, Finance, NMIMS\nCFA Charterholder',
            career: 'J.P. Morgan / Macquarie Securities\nNippon Life India Asset Management\nAbakkus Mutual Fund',
            expertise: 'Equity research, fund management, sector analysis',
            bio: 'Sanjay has worked in equity research and fund management across major financial institutions. His experience at Nippon Life India included flexi-cap, mid-cap and thematic investment mandates.'
        }),
        pratish: profile('Abakkus Mutual Fund', sources.abakkus, '2026-10-17', {
            name: 'Pratish Krishnan', role: 'Senior Fund Manager, Equity', experience: '25',
            qualifications: 'MMS, Sydenham Institute of Management\nB.Com, University of Mumbai',
            career: 'SBI Capital Markets / Antique Stock Broking\nBank of America Merrill Lynch\nBaroda BNP Paribas Mutual Fund\nAbakkus Mutual Fund',
            expertise: 'Equity research, sector analysis, portfolio management',
            bio: 'Pratish brings a background in institutional research and fund management. Before Abakkus, he managed funds at Baroda BNP Paribas and worked as an analyst at major brokerage houses.'
        }),
        abakkusAbhishek: profile('Abakkus Mutual Fund', sources.abakkus, '2026-10-17', {
            name: 'Abhishek Krishnaswami Srinivas', role: 'Fund Manager & Dealer, Fixed Income', experience: '12+',
            qualifications: 'PGDM, Finance\nB.Com, University of Mumbai',
            career: 'Insurance-sector investment management\nAbakkus Mutual Fund', expertise: 'Fixed-income investing, debt portfolio management',
            bio: 'Abhishek manages the fixed-income component of Abakkus schemes. His experience spans investment and portfolio management in debt markets.'
        }),
        trideep: profile('Edelweiss Mutual Fund', sources.edelweiss, '2025-03-19', {
            name: 'Trideep Bhattacharya', role: 'Chief Investment Officer, Equities', experience: '25',
            qualifications: 'B.Tech, IIT Kharagpur\nPGDBM, Finance, S.P. Jain',
            career: 'UBS Global Asset Management / State Street\nAxis Asset Management\nEdelweiss Asset Management',
            expertise: 'Indian and global equities, portfolio management',
            bio: 'Trideep\'s background spans Indian and global equity investing. Before Edelweiss, he helped build Axis AMC\'s portfolio-management business and worked with international asset managers.'
        }),
        dhruv: profile('Edelweiss Mutual Fund', 'https://www.edelweissmf.com/Files/downloads/Product%20Collateral/Factsheet/2026/Feb/published/EdelweissMidCapFund_14022026_073154_PM.pdf', '2026-01-31', {
            name: 'Dhruv Bhatia', role: 'Fund Manager, Equity', experience: '13',
            career: 'Edelweiss Asset Management', expertise: 'Mid-cap and small-cap portfolio management',
            bio: 'Dhruv manages equity portfolios at Edelweiss, including its mid-cap and small-cap schemes. He has held these fund responsibilities since October 2024.'
        }),
        ashwani: profile('Edelweiss Mutual Fund', sources.edelweiss, '2025-03-19', {
            name: 'Ashwani Agarwalla', role: 'Co-Fund Manager, Equity', experience: '19+',
            qualifications: 'MBA, Finance, TAPMI', career: 'Edelweiss Asset Management',
            expertise: 'Financial services, consumer businesses, real estate research',
            bio: 'Ashwani\'s work combines investment management and sector research. His coverage includes financial services, consumer staples and real estate.'
        }),
        ramesh: profile('WhiteOak Capital Mutual Fund', sources.whiteoak, '2026-05-12', {
            name: 'Ramesh Mantri', role: 'Chief Investment Officer & Fund Manager, Equity', experience: '20+',
            qualifications: 'MBA\nChartered Accountant\nCFA Charterholder',
            career: 'Smith Management\nAshoka Capital Advisers\nWhiteOak Capital',
            expertise: 'Equity research, portfolio management, investment leadership',
            bio: 'Ramesh\'s career includes investment roles at Smith Management and Ashoka Capital Advisers before joining WhiteOak. He manages equity portfolios across the fund house\'s schemes.'
        }),
        trupti: profile('WhiteOak Capital Mutual Fund', sources.whiteoak, '2026-05-12', {
            name: 'Trupti Agrawal', role: 'Assistant Fund Manager, Equity', experience: '16+',
            qualifications: 'B.Com\nChartered Accountant', career: 'WhiteOak Capital, since 2017',
            expertise: 'Company analysis, equity portfolio management',
            bio: 'Trupti has been part of WhiteOak since 2017. She supports equity fund management across multiple portfolios and brings an accounting background to company analysis.'
        }),
        dheeresh: profile('WhiteOak Capital Mutual Fund', sources.whiteoak, '2026-05-12', {
            name: 'Dheeresh Pathak', role: 'Assistant Fund Manager, Equity', experience: '16+',
            qualifications: 'PGDBM\nB.E., Electronics & Communication',
            career: 'Goldman Sachs, 2007-2021\nWhiteOak Capital AMC, since 2022',
            expertise: 'Equity analysis, portfolio management',
            bio: 'Dheeresh\'s career includes more than a decade at Goldman Sachs before joining WhiteOak. His work covers equity analysis and fund-management responsibilities.'
        }),
        satish: profile('JM Financial Mutual Fund', sources.jm, '2026-05-31', {
            name: 'Satish Ramanathan, CFA', role: 'Chief Investment Officer, Equity', experience: '30+',
            qualifications: 'IIT Madras\nMBA, Finance, Texas A&M\nCFA Charterholder',
            career: 'ICICI Securities / Franklin Templeton\nSundaram AMC / Tatva Capital\nJM Financial Asset Management',
            expertise: 'Equity research, diversified investing, investment leadership',
            bio: 'Satish has worked across equity research and asset management, including senior roles at Franklin Templeton and Sundaram AMC. He also founded Tatva Capital before joining JM Financial.'
        }),
        asit: profile('JM Financial Mutual Fund', sources.jm, '2026-05-31', {
            name: 'Asit Bhandarkar', role: 'Senior Fund Manager, Equity', experience: '23+',
            qualifications: 'MMS, Finance, University of Mumbai',
            career: 'Jet Age Securities / Sushil Finance\nSBI Funds / Lotus India, now Invesco\nJM Financial Asset Management',
            expertise: 'Equity research, small-cap and diversified portfolios',
            bio: 'Asit has experience in both securities research and fund management. His earlier roles included SBI Funds and Lotus India AMC before his work at JM Financial.'
        }),
        deepak: profile('JM Financial Mutual Fund', sources.jm, '2026-05-31', {
            name: 'Deepak Gupta', role: 'Head of Research & Senior Fund Manager, Equity', experience: '21+',
            qualifications: 'Chartered Accountant\nM.Com, University of Mumbai',
            career: 'Access Asset Managers\nReliance Nippon Life Insurance / SBI Pension Funds\nJM Financial Asset Management',
            expertise: 'Equity research, institutional portfolio management',
            bio: 'Deepak\'s investment experience spans mutual funds, insurance and pension portfolios. He worked with SBI Pension Funds and Reliance Nippon Life Insurance before JM Financial.'
        })
    };

    function entry(names, managers, source, asOf) { return { names, managers, source, asOf }; }
    const catalogue = [
        entry(['Invesco India Midcap Fund'], ['aditya'], sources.invesco, '2026-04-30'),
        entry(['Invesco India Smallcap Fund'], ['taher', 'aditya'], sources.invesco, '2026-04-30'),
        entry(['Invesco India Flexi Cap Fund'], ['taher'], sources.invesco, '2026-04-30'),
        entry(['Invesco India Largecap Fund'], ['hiten'], sources.invesco, '2026-04-30'),
        entry(['HSBC Small Cap Fund'], ['venugopal', 'mayank'], sources.hsbc, '2026-05-31'),
        entry(['HSBC Midcap Fund'], ['cheenu', 'mayank'], sources.hsbc, '2026-05-31'),
        entry(['HSBC Large and Mid Cap Fund'], ['cheenu', 'mayank'], sources.hsbc, '2026-05-31'),
        entry(['HSBC Large Cap Fund'], ['neelotpal', 'mayank'], sources.hsbc, '2026-05-31'),
        entry(['HSBC Flexi Cap Fund'], ['hsbcAbhishek', 'mayank'], sources.hsbc, '2026-05-31'),
        entry(['Bandhan Flexi Cap Fund'], ['manish', 'viraj'], sources.bandhan, '2026-02-28'),
        entry(['Bandhan Midcap Fund'], ['ritu'], sources.bandhan, '2026-02-28'),
        entry(['TRUSTMF Flexi Cap Fund', 'TRUST Flexi Cap Fund'], ['mihir', 'saurabh', 'aakash'], 'https://www.valueresearchonline.com/stories/228395/fund-manager-changes-in-a-few-schemes-of-trust-mutual-fund/', '2026-04-24'),
        entry(['TRUSTMF Mid Cap Fund', 'TRUST Mid Cap Fund'], ['mihir', 'saurabh', 'aakash'], 'https://www.valueresearchonline.com/stories/228395/fund-manager-changes-in-a-few-schemes-of-trust-mutual-fund/', '2026-04-24'),
        entry(['TRUSTMF Multi Cap Fund', 'TRUST Multi Cap Fund'], ['mihir', 'saurabh', 'aakash'], 'https://www.valueresearchonline.com/stories/228395/fund-manager-changes-in-a-few-schemes-of-trust-mutual-fund/', '2026-04-24'),
        entry(['Parag Parikh Flexi Cap Fund', 'PPFAS Flexi Cap Fund'], ['rajeev', 'raunak', 'rajMehta', 'rukun'], 'https://amc.ppfas.com/schemes/fund-managers/', '2026-10-17'),
        entry(['Parag Parikh Large Cap Fund'], ['rajeev', 'raunak', 'rajMehta', 'rukun'], 'https://amc.ppfas.com/schemes/', '2026-10-17'),
        entry(['Parag Parikh ELSS Tax Saver Fund', 'Parag Parikh Tax Saver Fund'], ['rajeev', 'raunak', 'rajMehta', 'rukun'], 'https://amc.ppfas.com/schemes/', '2026-10-17'),
        entry(['DSP Small Cap Fund'], ['vinit'], 'https://www.dspim.com/ifaxpress/mutual-fund-schemes/equity-funds/small-cap-fund/dspmc-regular-growth', '2026-10-17'),
        entry(['DSP Mid Cap Fund'], ['vinit', 'dspAbhishek'], 'https://www.dspim.com/invest/mutual-fund-schemes/equity-funds/mid-cap-fund/dspsm-direct-growth', '2026-10-17'),
        entry(['DSP Flexi Cap Fund'], ['bhavin'], 'https://www.dspim.com/invest/mutual-fund-schemes/equity-funds/flexi-cap-fund/dspeq-direct-growth', '2026-10-17'),
        entry(['Abakkus Flexi Cap Fund'], ['sanjay', 'abakkusAbhishek'], 'https://www.abakkusmf.com/uploads/Abakkus_MF_Factsheet_Mar_26_Final_876e5a15b6.pdf', '2026-03-31'),
        entry(['Abakkus Small Cap Fund'], ['sanjay', 'abakkusAbhishek'], 'https://www.abakkusmf.com/uploads/Abakkus_MF_Factsheet_Mar_26_Final_876e5a15b6.pdf', '2026-03-31'),
        entry(['Abakkus Large and Mid Cap Fund'], ['pratish'], 'https://www.abakkusmf.com/fund-page.html?fund=large-midcap-fund', '2026-10-17'),
        entry(['Edelweiss Mid Cap Fund'], ['trideep', 'dhruv'], 'https://www.edelweissmf.com/Files/downloads/Product%20Collateral/Factsheet/2026/Feb/published/EdelweissMidCapFund_14022026_073154_PM.pdf', '2026-01-31'),
        entry(['Edelweiss Small Cap Fund'], ['trideep', 'dhruv'], 'https://www.edelweissmf.com/Files/downloads/Product%20Collateral/Factsheet/2026/May/published/SmallcapFund_21052026_114538_AM.pdf', '2026-04-30'),
        entry(['Edelweiss Flexi Cap Fund'], ['trideep', 'ashwani'], sources.edelweiss, '2025-03-19'),
        ...['Flexi Cap', 'Mid Cap', 'Large Cap', 'Large and Mid Cap', 'Multi Cap', 'ELSS Tax Saver'].map(category => entry([`WhiteOak Capital ${category} Fund`], ['ramesh', 'trupti', 'dheeresh'], sources.whiteoak, '2026-05-12')),
        ...['Flexicap', 'Midcap', 'Small Cap', 'Large Cap', 'ELSS Tax Saver', 'Value', 'Focused'].map(category => entry([`JM ${category} Fund`], ['satish', 'asit', 'deepak'], sources.jm, '2026-05-31')),
        entry(['JM Large and Mid Cap Fund'], ['asit', 'deepak'], sources.jm, '2026-05-31')
    ];

    window.FundManagerLibrary = { profiles, catalogue };
})();
