import React, {Component} from 'react';
import Nav from "./Nav";

class Landingpage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <header id="upper" className="intro-header">
                    <div className="container container-md">
                        <div className="row justify-content-center">
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
                <section id="Home" className="container-fluid section">
                    <div className="row justify-content-center">
                        <div className="col-md-4 content p-4">
                            <img src="https://drive.google.com/uc?id=1tS5F83No-pNAWEZMurWVyc0RT7NdfdxY"
                                 className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-7 offset-md-1 content">
                            <h1>Apa itu Website Gawein?</h1>
                            <p className="lead text-justify">GaweIn adalah situs marketplace freelance, jasa dan produk
                                digital yang mempertemukan pihak pencari jasa dengan para freelancer. Didirikan pada
                                Februari 2020, GaweIn menyediakan tempat untuk para pencari kerja dan pebisnis yang
                                membutuhkan jasa dari setiap jurusan dan berbagai bidang kategori pekerjaan.  Selain
                                mendapatkan proyek dan menawarkan jasa, pengguna situs juga dapat melakukan transaksi
                                jual-beli produk digital.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="Why" className="container-fluid section-2">
                    <div className="row justify-content-center">
                        <div className="col-md-11 text-center content">
                            <h1>Mengapa Gawein Aja?</h1>
                        </div>
                        <div className="col-md-3 card">
                            <h1>AMAN</h1>
                            <p className="lead text-justify">
                                Jaminan User terverifikasi merupakan civitas akademika POLBAN.
                            </p>
                            <p className="lead text-justify">
                                Memiliki tim bantuan untuk menyelesaikan permasalahan project yang terjadi.
                            </p>
                        </div>
                        <div className="col-md-3 card offset-md-1">
                            <h1>JELAS</h1>
                            <p className="lead text-justify">
                                Semua detail pekerjaan, deskripsi, deadline sudah disepakati sejak awal.
                            </p>
                            <p className="lead text-justify">
                                Sistem penilaian yang transparan, memudahkan semua pihak dalam menentukan pilihan dan
                                terhindar dari penipuan.
                            </p>
                        </div>
                        <div className="col-md-3 card offset-md-1">
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
                    </div>
                </section>
                <section id="Procedure" className="container-fluid section-2">
                    <div className="row justify-content-center">
                        <div className="col-md-11 text-center content">
                            <h1>Bagaimana Cara Kerja?</h1>
                        </div>
                        <div className="col-md-5 card">
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
                        <div className="col-md-5 card offset-md-1">
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
                    </div>
                </section>
                <footer className="container-fluid bg-dark" id="Contact">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h5>Contact</h5>
                            <p><i className="fas fa-user mr-2"></i>Gina Melinia - WP Penjualan.</p>
                            <p><i className="fas fa-mobile-alt mr-2"></i>+6282321570639</p>
                            <p><i className="fas fa-user mr-2"></i>Adhitya Febhiakbar - Chief Marketing Officer.</p>
                            <p><i className="fas fa-mobile-alt mr-2"></i>+6282262465487</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Social Media</h5>
                            <a className="btn">
                                <i className="fab fa-instagram"></i>
                                <p>@gawein</p>
                            </a>
                        </div>
                        <div className="col-md-3">
                            <h5>Login or Register?</h5>
                            <button className="btn btn-outline-primary" type="">Login</button>
                            <br/>
                            <button className="btn btn-outline-secondary mt-3" type="">Register</button>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Landingpage;
