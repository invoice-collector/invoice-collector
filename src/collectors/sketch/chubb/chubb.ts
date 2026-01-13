import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChubbCollector extends SketchCollector {

    static CONFIG = {
        id: "chubb",
        name: "Chubb",
        description: "i18n.collectors.chubb.description",
        version: "0",
        website: "https://chubb.com",
        logo: "https://companieslogo.com/img/orig/CB_BIG-be581ee6.svg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        loginUrl: "https://cbaadb2c08.b2clogin.com/cbaadb2c08.onmicrosoft.com/b2c_1a_vesignupsignin/oauth2/v2.0/authorize?client_id=230236d5-e6dd-45a1-bdcc-8eca912c3cdc&redirect_uri=https%3a%2f%2fassurancesfr.chubbinsured.com%2fhome&response_mode=form_post&response_type=code+id_token&scope=openid+profile+offline_access+https%3a%2f%2fb2c.chubbdigital.com%2fMediaMakerApi%2fread+https%3a%2f%2fb2c.chubbdigital.com%2fMediaMakerApi%2fwrite&state=OpenIdConnect.AuthenticationProperties%3duaQUwHwDX6VKq6pSmx581Xwv2ilV6iyEfVrverZj3DXmv-t1ZZDsuLhQ_2q-FKSpFGTWaK5e2n5f7g2yYm_cepCFLRRp5cxZIL1GAaNaFhbj9Ff4EUxvg9awch8ABm3jOiiNva3LwfzEoarMiKB1MCdzH2K9xtNqAoil5wJ9CrnHotzPCU9cmIgBNWro5tIAfQb-HRR7DY_tV057EOfSUFri_vbtEWMlbDkFlnXBqtBnxxfCt7KJHS9634WiD3Fs&nonce=637610773204443718.ZjAxMTIwYjktODk1My00NDU0LWFkOTgtZmUzNDk3MjFmNjE3YWViNjU3ZmItZjJhMS00MWUzLWI4ZTEtYzM1NmZjYjZlYmNj&cb=false",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChubbCollector.CONFIG);
    }
}
