
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfMansfieldTxCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_mansfield_tx",
        name: "City of Mansfield TX",
        description: "i18n.collectors.city_of_mansfield_tx.description",
        version: "0",
        website: "https://payments.mansfieldtexas.gov/stw_php/stwub/ubliphst.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/180914.jpg",
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
        loginUrl: "https://payments.mansfieldtexas.gov/stw_php/stwub/ubliphst.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityOfMansfieldTxCollector.CONFIG);
    }
}
