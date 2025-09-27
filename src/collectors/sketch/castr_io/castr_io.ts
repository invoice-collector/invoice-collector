
import { SketchCollector } from '../../sketchCollector';

export class CastrIoCollector extends SketchCollector {

    static CONFIG = {
        id: "castr_io",
        name: "Castr.io",
        description: "i18n.collectors.castr_io.description",
        version: "0",
        website: "https://castr.io/app/manage/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778097.jpg",
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
        entryUrl: "https://castr.io/app/manage/billing",
    }

    constructor() {
        super(CastrIoCollector.CONFIG);
    }
}
