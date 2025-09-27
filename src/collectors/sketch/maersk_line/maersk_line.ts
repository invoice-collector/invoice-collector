
import { SketchCollector } from '../../sketchCollector';

export class MaerskLineCollector extends SketchCollector {

    static CONFIG = {
        id: "maersk_line",
        name: "Maersk Line",
        description: "i18n.collectors.maersk_line.description",
        version: "0",
        website: "https://www.maersk.com/myfinance/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/760649.jpg",
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
        entryUrl: "https://www.maersk.com/myfinance/",
    }

    constructor() {
        super(MaerskLineCollector.CONFIG);
    }
}
