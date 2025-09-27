
import { SketchCollector } from '../../sketchCollector';

export class PressreaderComCollector extends SketchCollector {

    static CONFIG = {
        id: "pressreader_com",
        name: "PressReader.com",
        description: "i18n.collectors.pressreader_com.description",
        version: "0",
        website: "https://www.pressreader.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4179076.jpg",
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
        entryUrl: "https://www.pressreader.com/",
    }

    constructor() {
        super(PressreaderComCollector.CONFIG);
    }
}
