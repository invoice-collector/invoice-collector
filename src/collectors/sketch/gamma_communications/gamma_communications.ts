
import { SketchCollector } from '../../sketchCollector';

export class GammaCommunicationsCollector extends SketchCollector {

    static CONFIG = {
        id: "gamma_communications",
        name: "Gamma Communications",
        description: "i18n.collectors.gamma_communications.description",
        version: "0",
        website: "https://login.gammacommunications.de/path/app/?rq_AppGuid=FF94DC683D677A9715F5DC21B0BE72CA6FF0E450&rq_TargetPageGuid=88D2C37241A396CF103761CFDC6851BE92D98CC0&qs_link=6DB5FF42AE64D8569442A19905EEF40F2FAD1E4D&qs_mode=new&qs_page=88D2C37241A396CF103761CFDC68",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2761415.jpg",
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
        entryUrl: "https://login.gammacommunications.de/path/app/?rq_AppGuid=FF94DC683D677A9715F5DC21B0BE72CA6FF0E450&rq_TargetPageGuid=88D2C37241A396CF103761CFDC6851BE92D98CC0&qs_link=6DB5FF42AE64D8569442A19905EEF40F2FAD1E4D&qs_mode=new&qs_page=88D2C37241A396CF103761CFDC68",
    }

    constructor() {
        super(GammaCommunicationsCollector.CONFIG);
    }
}
