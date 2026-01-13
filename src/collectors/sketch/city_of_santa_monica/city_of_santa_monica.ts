
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfSantaMonicaCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_santa_monica",
        name: "City of Santa Monica",
        description: "i18n.collectors.city_of_santa_monica.description",
        version: "0",
        website: "https://utilityportal.santamonica.gov/app/login.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4178908.jpg",
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
        loginUrl: "https://utilityportal.santamonica.gov/app/login.jsp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityOfSantaMonicaCollector.CONFIG);
    }
}
