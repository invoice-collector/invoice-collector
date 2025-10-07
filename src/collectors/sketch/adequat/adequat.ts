
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdequatCollector extends SketchCollector {

    static CONFIG = {
        id: "adequat",
        name: "ADEQUAT",
        description: "i18n.collectors.adequat.description",
        version: "0",
        website: "https://connexion.myadequat.fr/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DspaCodeClient%26redirect_uri%3Dhttps%253A%252F%252Fmyadequat.fr%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%2520phone%2520resourceApi%",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1312001.jpg",
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
        entryUrl: "https://connexion.myadequat.fr/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DspaCodeClient%26redirect_uri%3Dhttps%253A%252F%252Fmyadequat.fr%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%2520phone%2520resourceApi%",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdequatCollector.CONFIG);
    }
}
