import mainScreen from '../assets/img/Screenshot1.png';

const Potential = () => {
    return (
        <div id="potential" style={styles.container}>
            <h1>
                Application potential
            </h1>
            <p style={{color:'gray', fontSize: 14, width:'70%', textAlign: 'center'}}>
                Наша платформа обладает огромным потенциалом для изменения образовательной системы,
                построения активного сообщества и создания новых возможностей для монетизации.
                Мы объединяем инновации и практические решения для глобального улучшения.
            </p>
            <div style={{
                display: 'flex',
                justifyContent: "space-around",
                alignItems: "center",
                width: '100%',
                marginTop: '30px'
            }}>
                <img src={mainScreen} style={{
                    height: '75vh',
                    width: 'auto',
                    borderRadius: '24px',
                    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.5)"
                }}/>
                <div style={{display: 'flex', flexDirection: "column", gap: '40px'}}>
                    <div style={styles.mobileUI}>
                        <h1 style={{fontSize: '18px'}}>
                            Большое комьюнити
                        </h1>
                        <p style={{fontSize: '14px', color: 'gray'}}>
                            Наша платформа предоставляет пользователям возможность взаимодействовать, делиться опытом и
                            учиться друг у друга. Мы создаём активное и поддерживающее сообщество.
                        </p>
                    </div>
                    <div style={styles.mobileUI}>
                        <h1 style={{fontSize: '18px'}}>
                            Большое поле для монетизации
                        </h1>
                        <p style={{fontSize: '14px', color: 'gray'}}>
                            Платформа предлагает широкий спектр возможностей для монетизации, таких как
                            премиум-подписки, платные курсы и рекламные интеграции.
                        </p>
                    </div>
                    <div style={styles.mobileUI}>
                        <h1 style={{fontSize: '18px'}}>
                            Обновление системы общего образования
                        </h1>
                        <p style={{fontSize: '14px', color: 'gray'}}>
                            Мы стремимся модернизировать систему образования, делая обучение доступным, инновационным и
                            адаптивным к современным реалиям.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        padding: "20px",
        // paddingTop: "100px",
        backgroundColor: "#f9f9f9",
    },
    mobileUI: {
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
    },
}

export default Potential
