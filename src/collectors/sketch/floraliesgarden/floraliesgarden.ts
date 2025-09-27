
import { SketchCollector } from '../../sketchCollector';

export class FloraliesgardenCollector extends SketchCollector {

    static CONFIG = {
        id: "floraliesgarden",
        name: "FloraliesGarden",
        description: "i18n.collectors.floraliesgarden.description",
        version: "0",
        website: "http://www.floraliesgarden.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119592.jpg",
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
        entryUrl: "http://www.floraliesgarden.com/",
    }

    constructor() {
        super(FloraliesgardenCollector.CONFIG);
    }
}
