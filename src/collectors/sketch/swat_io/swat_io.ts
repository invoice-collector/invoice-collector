
import { SketchCollector } from '../../sketchCollector';

export class SwatIoCollector extends SketchCollector {

    static CONFIG = {
        id: "swat_io",
        name: "Swat.io",
        description: "i18n.collectors.swat_io.description",
        version: "0",
        website: "https://swatio.app/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4188567.jpg",
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
        entryUrl: "https://swatio.app/",
    }

    constructor() {
        super(SwatIoCollector.CONFIG);
    }
}
