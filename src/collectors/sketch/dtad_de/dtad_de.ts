
import { SketchCollector } from '../../sketchCollector';

export class DtadDeCollector extends SketchCollector {

    static CONFIG = {
        id: "dtad_de",
        name: "DTAD.de",
        description: "i18n.collectors.dtad_de.description",
        version: "0",
        website: "https://www.dtad.de/login/;jsessionid=1C2B5674DA488F938325C8E10B5F20E0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31371.jpg",
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
        entryUrl: "https://www.dtad.de/login/;jsessionid=1C2B5674DA488F938325C8E10B5F20E0",
    }

    constructor() {
        super(DtadDeCollector.CONFIG);
    }
}
