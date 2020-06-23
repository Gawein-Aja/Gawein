import React, {Component} from 'react';
import Section from "../partials/Section";

class Landing extends Component {
    render() {
        return (
            <div>
                <header id="Home" className="intro-header">
                    <div className="container container-md align-items-center">
                        <div className="row justify-content-around">
                            <div className="col-lg-8 col-md-10">
                                <div className="site-heading">
                                    <h1>Gawein Aja</h1>
                                    <hr className="small"/>
                                    <span className="subheading">Situs marketplace freelance, jasa dan produk digital
                                        yang mempertemukan pihak pencari jasa dengan para freelancer.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Section id="What">
                    <div className="col-md-4 p-4">
                        <img src="https://drive.google.com/uc?id=1tS5F83No-pNAWEZMurWVyc0RT7NdfdxY"
                             className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7 offset-md-1">
                        <h1>Apa itu Website Gawein?</h1>
                        <p className="lead text-justify">GaweIn adalah situs marketplace freelance, jasa dan produk
                            digital yang mempertemukan pihak pencari jasa dengan para freelancer. Didirikan pada
                            Februari 2020, GaweIn menyediakan tempat untuk para pencari kerja dan pebisnis yang
                            membutuhkan jasa dari setiap jurusan dan berbagai bidang kategori pekerjaan.  Selain
                            mendapatkan proyek dan menawarkan jasa, pengguna situs juga dapat melakukan transaksi
                            jual-beli produk digital.
                        </p>
                    </div>
                </Section>
                <Section id="Why" title="Mengapa Gawein Aja?">
                    <div className="col-md-4 card-detail">
                        <h1>AMAN</h1>
                        <p className="lead text-justify">
                            Jaminan User terverifikasi merupakan civitas akademika POLBAN.
                        </p>
                        <p className="lead text-justify">
                            Memiliki tim bantuan untuk menyelesaikan permasalahan project yang terjadi.
                        </p>
                    </div>
                    <div className="col-md-4 card-detail">
                        <h1>JELAS</h1>
                        <p className="lead text-justify">
                            Semua detail pekerjaan, deskripsi, deadline sudah disepakati sejak awal.
                        </p>
                        <p className="lead text-justify">
                            Sistem penilaian yang transparan, memudahkan semua pihak dalam menentukan pilihan dan
                            terhindar dari penipuan.
                        </p>
                    </div>
                    <div className="col-md-4 card-detail">
                        <h1>AKURAT</h1>
                        <p className="lead text-justify">
                            Owner bisa mencari tenaga ahli di bidangnya dengan cepat & benar karena adanya kategori.
                        </p>
                        <p className="lead text-justify">
                            Worker bisa mendapatkan pekerjaan yang sesuai dengan bidangnya.
                        </p>
                        <p className="lead text-justify">
                            Owner hanya membayar biaya yang sudah disepakati
                        </p>
                    </div>
                </Section>
                <Section title="Bagaimana Cara Kerja?" id="Procedure">
                    <div className="col-md-6 card-detail">
                        <h1> <i className="fas fa-briefcase mr-1"></i>OWNER</h1>
                        <p className="lead text-justify">
                            Melakukan publish project dengan spesifikasi yang jelas (Judul, deskripsi, kategori dan
                            deadline).
                        </p>
                        <p className="lead text-justify">
                            Melakukan pemilihan Worker / freelancer.
                        </p>
                        <p className="lead text-justify">
                            Transfer ke rekening perusahaan GaweIn Aja.
                        </p>
                        <p className="lead text-justify">
                            Terima hasil dari Worker.
                        </p>
                    </div>
                    <div className="col-md-6 card-detail">
                        <h1><i className="fas fa-handshake mr-1"></i>WORKER</h1>
                        <p className="lead text-justify">
                            Melakukan pencarian project.
                        </p>
                        <p className="lead text-justify">
                            Mengajukan penawaran.
                        </p>
                        <p className="lead text-justify">
                            Mengerjakan project dan upload.
                        </p>
                        <p className="lead text-justify">
                            Terima hasil dari Owner.
                        </p>
                    </div>
                </Section>
            </div>
        );
    }
}

export default Landing;
