import { ServiceItem, TestimonialItem, CoverageAreaItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'Cuci AC Standar',
    title: 'Cuci AC Standar 1/2 - 1 PK',
    category: 'Unit Standar Residensial',
    description: 'Solusi tepat untuk AC kamar tidur dan ruang keluarga ukuran standar.',
    price: 80000,
    unit: 'unit',
    popular: true,
    features: [
      'Pembersihan unit indoor & filter udara',
      'Bergaransi 1 minggu',
      'Cuci outdoor, baling-baling & kondensor',
      'Penyemprotan talang air & pipa drainase',
      'Pengecekan arus ampere & tekanan freon',
      'Semprot desinfektan anti-bakteri',
    ],
  },
  {
    id: 'Bongkar AC',
    title: 'Bongkar AC Standar 1/2 - 2 PK',
    category: 'Kapasitas Besar',
    description: 'Bongkar AC indoor dan outdoor untuk ruang luas, ruang tamu, atau ruko.',
    price: 150000,
    unit: 'unit',
    features: [
      'Bongkar AC indoor dan outdoor',
      'Bongkar bracket',
      'Bongkar wiring dan routing',
      'Bongkar pipa pembuangan'
    ],
  },
  {
    id: 'Cuci AC-inverter',
    title: 'Cuci AC Inverter',
    category: 'Penanganan Khusus PCB',
    description: 'Perlindungan ekstra untuk modul sensitif AC hemat listrik Inverter.',
    price: 125000,
    unit: 'unit',
    features: [
      'Isolasi & pelindung modul elektronik PCB',
      'Bergaransi 1 minggu',
      'Pembersihan sensor suhu termistor',
      'Jet wash teratur mencegah korsleting',
      'Pengecekan parameter inverter',
      'Pemberian cairan antibakterial aroma segar',
    ],
  },
  {
    id: 'Isi freon',
    title: 'Isi freon Murni 0-150 psi',
    category: 'R22 / R410A / R32',
    description: 'Pengisian freon berkualitas untuk mengembalikan suhu dingin AC secara maksimal.',
    price: 400000,
    unit: 'unit',
    features: [
      'Cek tekanan manifold gauge digital',
      'Deteksi potensi kebocoran sambungan nepel',
      'Freon 100% murni sesuai spesifikasi pabrikan',
      'Penyesuaian oli kran tanpa overisasi',
    ],
  },
  {
    id: 'Tambah freon',
    title: 'Tambah Freon Murni',
    category: 'R22 / R410A / R32',
    description: 'Tambah freon berkualitas untuk mengembalikan suhu dingin AC secara maksimal.',
    price: 250000,
    unit: 'unit',
    features: [
      'Tambah isi freon',
      'Deteksi potensi kebocoran sambungan nepel',
      'Freon 100% murni sesuai spesifikasi pabrikan',
      'Penyesuaian oli kran tanpa overisasi',
    ],
  },
  {
    id: 'bongkar-pasang',
    title: 'Bongkar Pasang AC',
    category: 'Relokasi & Instalasi Baru',
    description: 'Pemasangan rapi, estetis, dan penguncian freon tanpa terbuang (pump down).',
    price: 500000,
    unit: 'unit',
    features: [
      'Proses pump-down amankan sirkulasi freon',
      'Bergaransi 1 bulan',
      'Vakum pipa instalasi tembaga sebelum running',
      'Pengeboran rapi tanpa merusak tembok luar',
      'Testing dingin & arus listrik operasional',
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Rina Wulandari',
    role: 'Rumah Tangga • Bintaro Sektor 7',
    initials: 'RW',
    quote: 'Teknisinya ramah sekali, dinding rumah tidak becek karena pakai cover rapi banget. AC kamar yang tadinya bunyi mendengung sekarang hening dan sejuk kembali. Sangat rekomen!',
    rating: 5,
  },
  {
    id: 'testi-2',
    name: 'Hendra Saputra',
    role: 'Residensial • Jagakarsa, Jaksel',
    initials: 'HS',
    quote: 'Jujur banget soal freon. Pas dicek tekanannya masih cukup normal jadi gak disuruh bayar tambah freon seperti tukang servis lain. Hanya bayar jasa cuci biasa. Benar-benar amanah!',
    rating: 5,
  },
  {
    id: 'testi-3',
    name: 'Dewi Kartika',
    role: 'Pribadi • Grand Depok City',
    initials: 'DK',
    quote: 'Kemarin AC bocor air sampai netes ke meja kerja. Pesan jam 9 pagi, jam 11 teknisi sudah tiba di Depok. Saluran mampet langsung ditangani tuntas dan dikasih garansi 30 hari.',
    rating: 5,
  },
];

export const COVERAGE_AREAS_DATA: CoverageAreaItem[] = [
  {
    id: 'jaksel',
    region: 'Jakarta Selatan',
    districts: 'Kebayoran Baru, Tebet, Cilandak, Jagakarsa, Pasar Minggu, Mampang',
  },
  {
    id: 'jaktim',
    region: 'Jakarta Timur',
    districts: 'Duren Sawit, Matraman, Ciracas, Cijantung, Kramat Jati',
  },
  {
    id: 'depok',
    region: 'Kota Depok',
    districts: 'Margonda, Beji, Cimanggis, Sukmajaya, Sawangan, Cinere',
  },
  {
    id: 'tangsel',
    region: 'Tangerang Selatan',
    districts: 'Bintaro, BSD, Ciputat, Pamulang, Serpong',
  },
  {
    id: 'bekasi',
    region: 'Kota Bekasi',
    districts: 'Bekasi Barat, Bekasi Selatan, Pondok Gede, Jatiasih',
  },
  {
    id: 'custom',
    region: 'Lokasi Lainnya?',
    districts: 'Hubungi admin kami untuk cek ketersediaan teknisi terdekat',
    isCustom: true,
  },
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: 'Teknisi Berpengalaman & Sopan',
    description: 'Pengecekan mendalam, berkomunikasi rapi, dan selalu menggunakan plastik cover pelindung dinding serta perabot Anda.',
    badge: 'Prosedur Rapi & Bersih',
  },
  {
    title: 'Harga Terbuka & Transparan',
    description: 'Daftar tarif fix sejak awal sebelum pengerjaan. Tidak ada biaya siluman dan tidak memaksakan perbaikan jika memang masih optimal.',
    badge: 'Bebas Biaya Tersembunyi',
  },
  {
    title: 'Garansi Pengerjaan 30 Hari',
    description: 'Jika AC kembali menetes, bocor, atau tidak dingin dalam kurun waktu 30 hari pasca pengerjaan, kami siap datang kembali tanpa biaya tambahan.',
    badge: 'Klaim Mudah Tanpa Ribet',
  },
  {
    title: 'Peralatan Modern & Higienis',
    description: 'Menggunakan jet cleaner dengan kekuatan terukur agar sirip evaporator tidak rusak, serta dilengkapi semprotan desinfektan anti-bakteri.',
    badge: 'Aman Bagi Komponen AC',
  },
];
