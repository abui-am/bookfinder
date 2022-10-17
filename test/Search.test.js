import '@testing-library/jest-dom/extend-expect';

import { render, screen, waitFor } from '@testing-library/react';

const mockBook = {
  kind: 'books#volumes',
  totalItems: 437,
  items: [
    {
      kind: 'books#volume',
      id: 'uHu6zQEACAAJ',
      etag: 'BWR5b4F6VZg',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/uHu6zQEACAAJ',
      volumeInfo: {
        title: 'Correlation Between BASDAI and ASDAS to Evaluate the Activity of Patients with Spondyloarthritis',
        authors: ['Sara El Rharras'],
        publishedDate: '2017',
        description:
          'INTRODUCTIONAnkylosing Spondylitis Disease Activity Score (ASDAS) is a new measurement tool to assess disease activity in patients with spondyloarthritis (SPA). It was developed because of BASDAIu2019s limitation for being totally patient-derived with limited validity. The aim of the study was to compare ASDAS with BASDAI for evaluation of spondyloarthritis activity in our department.MATERIALSWe included cases of pondyloarthritis fulfilling ASDAS or AMOR classification criteria. The demographic characteristics were collected as well as clinical and biological characteristics. Disease activity was assessed by BASDAI and ASDAS-CRP at the same visit. The correlation between ASDAS and BASDAI was evaluated using Pearsonu2019s correlation coefficients (r, p values). Statically significant covariate was considered if p',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'OCLC:1163853940',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        printType: 'BOOK',
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        language: 'en',
        previewLink: 'http://books.google.co.id/books?id=uHu6zQEACAAJ&dq=asdas&hl=&cd=1&source=gbs_api',
        infoLink: 'http://books.google.co.id/books?id=uHu6zQEACAAJ&dq=asdas&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Correlation_Between_BASDAI_and_ASDAS_to.html?hl=&id=uHu6zQEACAAJ',
      },
      saleInfo: {
        country: 'ID',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'ID',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=uHu6zQEACAAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'INTRODUCTIONAnkylosing Spondylitis Disease Activity Score (ASDAS) is a new measurement tool to assess disease activity in patients with spondyloarthritis (SPA).',
      },
    },
    {
      kind: 'books#volume',
      id: 'tFaIDwAAQBAJ',
      etag: 'N3uv+Szg3gw',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/tFaIDwAAQBAJ',
      volumeInfo: {
        title: 'Axial Spondyloarthritis',
        authors: ['Philip Mease', 'Muhammad Asim Khan'],
        publisher: 'Elsevier Health Sciences',
        publishedDate: '2019-02-16',
        description:
          'Focusing on the key essentials you need to know, Axial Spondyloarthritis provides a quick, expert overview of axSpA from a clinical perspective. This concise resource by Drs. Philip Mease and Muhammad Khan presents practical recommendations and guidelines for the diagnosis, management, and treatment of spondyloarthritis impacting the axial skeleton alongside an overview of epidemiology, special populations, and patient education. Discusses key information on genetic factors and disease biomarkers. Presents an overview of clinical features, classification criteria, and imaging to aid in diagnosis. Covers management and treatment guidelines, including non-pharmacologic management and the use of biologics. Consolidates essential information on this timely topic into a single, convenient resource.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780323568012',
          },
          {
            type: 'ISBN_10',
            identifier: '0323568017',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 400,
        printType: 'BOOK',
        categories: ['Medical'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.4.4.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=tFaIDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=tFaIDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.co.id/books?id=tFaIDwAAQBAJ&pg=PA123&dq=asdas&hl=&cd=2&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=tFaIDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=tFaIDwAAQBAJ',
      },
      saleInfo: {
        country: 'ID',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 1238400,
          currencyCode: 'IDR',
        },
        retailPrice: {
          amount: 879261,
          currencyCode: 'IDR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=tFaIDwAAQBAJ&rdid=book-tFaIDwAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 1238400000000,
              currencyCode: 'IDR',
            },
            retailPrice: {
              amountInMicros: 879261000000,
              currencyCode: 'IDR',
            },
          },
        ],
      },
      accessInfo: {
        country: 'ID',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.id/books/download/Axial_Spondyloarthritis-sample-epub.acsm?id=tFaIDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.id/books/download/Axial_Spondyloarthritis-sample-pdf.acsm?id=tFaIDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink: 'http://play.google.com/books/reader?id=tFaIDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'All rights reserve. as the Ankylosing Spondylitis Disease Activity Score (\u003cb\u003eASDAS\u003c/b\u003e) and endorsed by ASAS.21,22 The score includes patient-reported assessments of back pain (BASDAI question 2), duration of morning stiffness (BASDAI question&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: '0wC-srWUxRsC',
      etag: 'xtjgtoVjW1w',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/0wC-srWUxRsC',
      volumeInfo: {
        title: 'Infectious Bone Diseases—Advances in Research and Treatment: 2012 Edition',
        subtitle: 'ScholarlyBrief',
        publisher: 'ScholarlyEditions',
        publishedDate: '2012-12-26',
        description:
          'Infectious Bone Diseases—Advances in Research and Treatment: 2012 Edition is a ScholarlyBrief™ that delivers timely, authoritative, comprehensive, and specialized information about Infectious Bone Diseases in a concise format. The editors have built Infectious Bone Diseases—Advances in Research and Treatment: 2012 Edition on the vast information databases of ScholarlyNews.™ You can expect the information about Infectious Bone Diseases in this eBook to be deeper than what you can access anywhere else, as well as consistently reliable, authoritative, informed, and relevant. The content of Infectious Bone Diseases—Advances in Research and Treatment: 2012 Edition has been produced by the world’s leading scientists, engineers, analysts, research institutions, and companies. All of the content is from peer-reviewed sources, and all of it is written, assembled, and edited by the editors at ScholarlyEditions™ and available exclusively from us. You now have a source you can cite with authority, confidence, and credibility. More information is available at http://www.ScholarlyEditions.com/.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781481609197',
          },
          {
            type: 'ISBN_10',
            identifier: '148160919X',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 71,
        printType: 'BOOK',
        categories: ['Medical'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=0wC-srWUxRsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=0wC-srWUxRsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.co.id/books?id=0wC-srWUxRsC&pg=PA61&dq=asdas&hl=&cd=3&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=0wC-srWUxRsC&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=0wC-srWUxRsC',
      },
      saleInfo: {
        country: 'ID',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 1175831,
          currencyCode: 'IDR',
        },
        retailPrice: {
          amount: 823082,
          currencyCode: 'IDR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=0wC-srWUxRsC&rdid=book-0wC-srWUxRsC&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 1175831000000,
              currencyCode: 'IDR',
            },
            retailPrice: {
              amountInMicros: 823082000000,
              currencyCode: 'IDR',
            },
          },
        ],
      },
      accessInfo: {
        country: 'ID',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.id/books/download/Infectious_Bone_Diseases_Advances_in_Res-sample-pdf.acsm?id=0wC-srWUxRsC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink: 'http://play.google.com/books/reader?id=0wC-srWUxRsC&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '(2011 JAN 24) University of Leeds: Active disease requiring TNF-alpha-antagonist therapy can be well discriminated with different \u003cb\u003eASDAS\u003c/b\u003e sets - a prospective, follow-up of disease activity assessment in ankylosing spondylitis In this&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'RrYSDQAAQBAJ',
      etag: 'wnioB5Hp8Cg',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/RrYSDQAAQBAJ',
      volumeInfo: {
        title: 'Axial Spondyloarthritis',
        authors: ['Stefan Siebert', 'Raj Sengupta', 'Alexander Tsoukas'],
        publisher: 'Oxford University Press',
        publishedDate: '2016-09-22',
        description:
          'Axial spondyloarthritis is the commonest inflammatory arthritis affecting the spine. Typically first presenting to a variety of primary and secondary care professionals, the high global disease burden of this condition has created a need for increased awareness of this condition across a rangeof rheumatology specialties.A pocketbook aimed at the non-specialist reader Axial Spondyloarthritis is the essential guide to this common condition. Focusing on the practical implications of developments in classification, diagnosis and treatment, this easily accessible text fully covers the broader spectrum of the disease.Concise and fully illustrated, this addition to the Oxford Rheumatology Library covers the history and pathophysiology of axial spondylitis, alongside detailed sections on treatments, complications and manifestations of the condition. With each section supported by a handy key points section, AxialSpondyloarthritis is a useful and constructive resource for any practitioner or trainee encountering this condition.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780198755296',
          },
          {
            type: 'ISBN_10',
            identifier: '0198755295',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 180,
        printType: 'BOOK',
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=RrYSDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=RrYSDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.co.id/books?id=RrYSDQAAQBAJ&pg=PA120&dq=asdas&hl=&cd=4&source=gbs_api',
        infoLink: 'http://books.google.co.id/books?id=RrYSDQAAQBAJ&dq=asdas&hl=&source=gbs_api',
        canonicalVolumeLink: 'https://books.google.com/books/about/Axial_Spondyloarthritis.html?hl=&id=RrYSDQAAQBAJ',
      },
      saleInfo: {
        country: 'ID',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'ID',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=RrYSDQAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Table 13.3 parameters for \u003cb\u003eAsdAs\u003c/b\u003e Parameters Source 1. total spinal pain bAsdAi question 2 (see table 13.2) 2. patient global disease activity bAs-g/pgA (see table 13.4) 3. peripheral pain/swelling bAsdAi question 3 (see table 13.2) 4.',
      },
    },
    {
      kind: 'books#volume',
      id: 'KFhq1gv0Io4C',
      etag: 'ejwsG7WsR7I',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/KFhq1gv0Io4C',
      volumeInfo: {
        title: 'Issues in Rheumatology Research and Practice: 2011 Edition',
        publisher: 'ScholarlyEditions',
        publishedDate: '2012-01-09',
        description:
          'Issues in Rheumatology Research and Practice: 2011 Edition is a ScholarlyEditions™ eBook that delivers timely, authoritative, and comprehensive information about Rheumatology Research and Practice. The editors have built Issues in Rheumatology Research and Practice: 2011 Edition on the vast information databases of ScholarlyNews.™ You can expect the information about Rheumatology Research and Practice in this eBook to be deeper than what you can access anywhere else, as well as consistently reliable, authoritative, informed, and relevant. The content of Issues in Rheumatology Research and Practice: 2011 Edition has been produced by the world’s leading scientists, engineers, analysts, research institutions, and companies. All of the content is from peer-reviewed sources, and all of it is written, assembled, and edited by the editors at ScholarlyEditions™ and available exclusively from us. You now have a source you can cite with authority, confidence, and credibility. More information is available at http://www.ScholarlyEditions.com/.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781464966149',
          },
          {
            type: 'ISBN_10',
            identifier: '1464966141',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 627,
        printType: 'BOOK',
        categories: ['Medical'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.4.5.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=KFhq1gv0Io4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=KFhq1gv0Io4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.co.id/books?id=KFhq1gv0Io4C&pg=PT151&dq=asdas&hl=&cd=5&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=KFhq1gv0Io4C&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=KFhq1gv0Io4C',
      },
      saleInfo: {
        country: 'ID',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 1489386,
          currencyCode: 'IDR',
        },
        retailPrice: {
          amount: 1042570,
          currencyCode: 'IDR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=KFhq1gv0Io4C&rdid=book-KFhq1gv0Io4C&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 1489386000000,
              currencyCode: 'IDR',
            },
            retailPrice: {
              amountInMicros: 1042570000000,
              currencyCode: 'IDR',
            },
          },
        ],
      },
      accessInfo: {
        country: 'ID',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.id/books/download/Issues_in_Rheumatology_Research_and_Prac-sample-epub.acsm?id=KFhq1gv0Io4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.id/books/download/Issues_in_Rheumatology_Research_and_Prac-sample-pdf.acsm?id=KFhq1gv0Io4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink: 'http://play.google.com/books/reader?id=KFhq1gv0Io4C&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Dicle University, Diyarbakir: Discrimination ability of \u003cb\u003eASDAS\u003c/b\u003e estimating disease activity status in patients with ankylosing spondylitis Researchers detail in &#39;Discrimination ability of \u003cb\u003eASDAS\u003c/b\u003e estimating disease activity status in&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'C9PoDwAAQBAJ',
      etag: 'wRFJn/z6uZ4',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/C9PoDwAAQBAJ',
      volumeInfo: {
        title:
          'Spondyloarthritis: The Changing Landscape Today, An Issue of Rheumatic Disease Clinics of North America',
        authors: ['Xenofon Baraliakos', 'Michael H. Weisman'],
        publisher: 'Elsevier Health Sciences',
        publishedDate: '2020-06-02',
        description:
          'This issue of Rheumatic Disease Clinics, guest edited by Drs. Xenofon Baraliakos and Michael H. Weisman, Spondyloarthritis: The Changing Landscape Today, takes a very comprehensive look at all of the essential topics surrounding spondyloarthritis. This issue is one of four selected each year by Dr. Weisman, who is also our series consulting editor. This very comprehensive issue will include the following topics (among others): Molecular biology approaches to understanding SpA; Microbiome and its role in SpA; Classification criteria in axSpA; Administrative data and coding for axSpA; Approach to the patient with IBD and AxSpA; Axial PsA vs. Axial SpA with Psoriasis; Emerging imaging techniques in SpA; The future of imaging in axSpA; Treatment Recommendations vs. Treat to Target in axSpA; The future of axSpA treatmentAxSpA in the era of Precision Medicine; Quality of Life as an outcome in studies of axSpA; Gender differences in SpA; The patient’s perspective on the burden of disease in axSpA; and Juvenile SpA.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780323733786',
          },
          {
            type: 'ISBN_10',
            identifier: '0323733786',
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 240,
        printType: 'BOOK',
        categories: ['Medical'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.13.4.0.preview.2',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=C9PoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=C9PoDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.co.id/books?id=C9PoDwAAQBAJ&pg=PA349&dq=asdas&hl=&cd=6&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=C9PoDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=C9PoDwAAQBAJ',
      },
      saleInfo: {
        country: 'ID',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 1489244,
          currencyCode: 'IDR',
        },
        retailPrice: {
          amount: 1057360,
          currencyCode: 'IDR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=C9PoDwAAQBAJ&rdid=book-C9PoDwAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 1489244000000,
              currencyCode: 'IDR',
            },
            retailPrice: {
              amountInMicros: 1057360000000,
              currencyCode: 'IDR',
            },
          },
        ],
      },
      accessInfo: {
        country: 'ID',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.id/books/download/Spondyloarthritis_The_Changing_Landscape-sample-epub.acsm?id=C9PoDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=C9PoDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '\u003cb\u003eASDAS\u003c/b\u003e includes some questions from BASDAI as well as patient and physical global assessments, and laboratory ... [CRP] or the erythrocyte sedimentation rate [ESR]).18 The \u003cb\u003eASDAS\u003c/b\u003e has been validated in multiple observational databases and&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'WGW1DwAAQBAJ',
      etag: 'uQ3uCoZwtnc',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/WGW1DwAAQBAJ',
      volumeInfo: {
        title: 'Treat to Target in Rheumatic Diseases: Rationale and Results',
        authors: ['Daniel Aletaha'],
        publisher: 'Elsevier Health Sciences',
        publishedDate: '2019-10-10',
        description:
          'Guest edited by Dr. Daniel Aletaha, this issue of Rheumatic Disease Clinics will cover “Treat to Target in Rheumatic Diseases with a focus on rationale and results. This issue is one of four selected each year by our series Consulting Editor, Dr. Michael Weisman. Articles explore diseases, including, but not limited to: History, Rheumatoid Arthritis, Psoriatic Arthritis, Spondylarthropathies, Systemic lupus erythematosus, PMR and GCA, Inflammatory Myopathies (PM/DM), Gout, and Subclinical Targets.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780323678971',
          },
          {
            type: 'ISBN_10',
            identifier: '0323678971',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        printType: 'BOOK',
        categories: ['Medical'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.5.8.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=WGW1DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=WGW1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.co.id/books?id=WGW1DwAAQBAJ&pg=PA524&dq=asdas&hl=&cd=7&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=WGW1DwAAQBAJ&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=WGW1DwAAQBAJ',
      },
      saleInfo: {
        country: 'ID',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 1614666,
          currencyCode: 'IDR',
        },
        retailPrice: {
          amount: 1146409,
          currencyCode: 'IDR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=WGW1DwAAQBAJ&rdid=book-WGW1DwAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 1614666000000,
              currencyCode: 'IDR',
            },
            retailPrice: {
              amountInMicros: 1146409000000,
              currencyCode: 'IDR',
            },
          },
        ],
      },
      accessInfo: {
        country: 'ID',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.id/books/download/Treat_to_Target_in_Rheumatic_Diseases_Ra-sample-epub.acsm?id=WGW1DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.id/books/download/Treat_to_Target_in_Rheumatic_Diseases_Ra-sample-pdf.acsm?id=WGW1DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink: 'http://play.google.com/books/reader?id=WGW1DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '\u003cb\u003eASDAS\u003c/b\u003e, which has validated cutoffs endorsed by ASAS and Outcome Measures in Rheumatology14,35 is generally preferred for use in measuring disease activity in axSpA. The initial version of \u003cb\u003eASDAS\u003c/b\u003e and its cutoffs did not have a low-disease&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'kIgtDAAAQBAJ',
      etag: 'pejQx9BhELM',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/kIgtDAAAQBAJ',
      volumeInfo: {
        title: 'Year Book of Medicine 2014,',
        authors: ['James Barker'],
        publisher: 'Elsevier Health Sciences',
        publishedDate: '2015-10-28',
        description:
          "The Year Book of Medicine brings you abstracts of the articles that reported the year's breakthrough developments in medicine, carefully selected from more than 500 journals worldwide. Expert commentaries evaluate the clinical importance of each article and discuss its application to your practice. There's no faster or easier way to stay informed! Sections are included on Rheumatology, Infectious Disease, Hematology and Oncology, Kidney, Water, and Electrolytes, Pulmonary Disease, Heart and Cardiovascular Disease, The Digestive System, and Endocrinology, Diabetes, and Metabolism.",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780323264709',
          },
          {
            type: 'ISBN_10',
            identifier: '0323264700',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        printType: 'BOOK',
        categories: ['Medical'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.1.1.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=kIgtDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=kIgtDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.co.id/books?id=kIgtDAAAQBAJ&pg=PT58&dq=asdas&hl=&cd=8&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=kIgtDAAAQBAJ&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=kIgtDAAAQBAJ',
      },
      saleInfo: {
        country: 'ID',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 2367198,
          currencyCode: 'IDR',
        },
        retailPrice: {
          amount: 1680708,
          currencyCode: 'IDR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=kIgtDAAAQBAJ&rdid=book-kIgtDAAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2367198000000,
              currencyCode: 'IDR',
            },
            retailPrice: {
              amountInMicros: 1680708000000,
              currencyCode: 'IDR',
            },
          },
        ],
      },
      accessInfo: {
        country: 'ID',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.id/books/download/Year_Book_of_Medicine_2014-sample-epub.acsm?id=kIgtDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.id/books/download/Year_Book_of_Medicine_2014-sample-pdf.acsm?id=kIgtDAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink: 'http://play.google.com/books/reader?id=kIgtDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Disease activity measures include the Bath AS Disease Activity Index (BASDAI), AS Disease Activity Index (\u003cb\u003eASDAS\u003c/b\u003e)Creactive protein (CRP), CRP, erythrocyte sedimentation rate (ESR), patient&#39;s global assessment and spinal pain.',
      },
    },
    {
      kind: 'books#volume',
      id: 'rIlLDAAAQBAJ',
      etag: 'w8ZH0HSCYPw',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/rIlLDAAAQBAJ',
      volumeInfo: {
        title:
          'Patient Reported Outcomes in Rheumatic Diseases, An Issue of Rheumatic Disease Clinics of North America, E-Book',
        authors: ['Jennifer L. Barton', 'Patti Katz'],
        publisher: 'Elsevier Health Sciences',
        publishedDate: '2016-05-27',
        description:
          'This issue is devoted to patient reported outcomes and their impact in the study of rheumatic diseases and the authors will also discuss PROs and vulnerable populations with rheumatic disease; technology, electronic health records and PROs: past, present and future; the promise of PROMIS – a uniform approach to PROs across rheumatic diseases, quality measures and PROs and how they relate and the importance of PROs in delivering quality care in the rheumatic diseases, and many more exciting articles.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780323445245',
          },
          {
            type: 'ISBN_10',
            identifier: '0323445241',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 225,
        printType: 'BOOK',
        categories: ['Medical'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.6.6.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=rIlLDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=rIlLDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.co.id/books?id=rIlLDAAAQBAJ&pg=PA289&dq=asdas&hl=&cd=9&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=rIlLDAAAQBAJ&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=rIlLDAAAQBAJ',
      },
      saleInfo: {
        country: 'ID',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 1614666,
          currencyCode: 'IDR',
        },
        retailPrice: {
          amount: 1146409,
          currencyCode: 'IDR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=rIlLDAAAQBAJ&rdid=book-rIlLDAAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 1614666000000,
              currencyCode: 'IDR',
            },
            retailPrice: {
              amountInMicros: 1146409000000,
              currencyCode: 'IDR',
            },
          },
        ],
      },
      accessInfo: {
        country: 'ID',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.id/books/download/Patient_Reported_Outcomes_in_Rheumatic_D-sample-epub.acsm?id=rIlLDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.id/books/download/Patient_Reported_Outcomes_in_Rheumatic_D-sample-pdf.acsm?id=rIlLDAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink: 'http://play.google.com/books/reader?id=rIlLDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'However, by reducing multiple domains drastically, the instrument may represent very different patient experiences similarly.20 One of the most recently developed measures, the Ankylosing Spondylitis Disease Activity Score (\u003cb\u003eASDAS\u003c/b\u003e),&nbsp;...',
      },
    },
    {
      kind: 'books#volume',
      id: 'vE4CEAAAQBAJ',
      etag: 'vpZiEiPv1H0',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/vE4CEAAAQBAJ',
      volumeInfo: {
        title: 'Big Data, Pharmacogenomics and Real-World Research in Pharmacology',
        authors: ['James Cheng-Chung Wei', 'Taisei Mushiroda', 'Wei-Chiao Chang'],
        publisher: 'Frontiers Media SA',
        publishedDate: '2020-10-12',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9782889660667',
          },
          {
            type: 'ISBN_10',
            identifier: '2889660664',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        printType: 'BOOK',
        categories: ['Medical'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=vE4CEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=vE4CEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.co.id/books?id=vE4CEAAAQBAJ&pg=PA86&dq=asdas&hl=&cd=10&source=gbs_api',
        infoLink: 'http://books.google.co.id/books?id=vE4CEAAAQBAJ&dq=asdas&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Big_Data_Pharmacogenomics_and_Real_World.html?hl=&id=vE4CEAAAQBAJ',
      },
      saleInfo: {
        country: 'ID',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'ID',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=vE4CEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Figure 2 shows the smoothing curve analyses of \u003cb\u003eASDAS\u003c/b\u003e, BASFI, and BASMI values for TNFi users and non-TNFi users during the 12-month follow-up period. The adjusted decline in \u003cb\u003eASDAS\u003c/b\u003e among TNFi users and non-TNFi users over 3 months was&nbsp;...',
      },
    },
  ],
};

jest.mock('../src/api/books', () => ({
  getAll: () => Promise.resolve({ data: mockBook }),
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      search: 'sadada',
    },
  }),
}));

describe('Search', () => {
  it('should render title', async () => {
    render(<Search />);

    await waitFor(() => {
      expect(
        screen.getByText(
          'Correlation Between BASDAI and ASDAS to Evaluate the Activity of Patients with Spondyloarthritis'
        )
      ).toBeVisible();
    });
  });
});

describe('Home', () => {
  it('should render', () => {
    render(<Home />);
  });
});
