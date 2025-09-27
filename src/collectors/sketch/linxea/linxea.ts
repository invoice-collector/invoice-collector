
import { SketchCollector } from '../../sketchCollector';

export class LinxeaCollector extends SketchCollector {

    static CONFIG = {
        id: "linxea",
        name: "LinXea",
        description: "i18n.collectors.linxea.description",
        version: "0",
        website: "https://www.linxea.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/619002.jpg",
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
        entryUrl: "https://www.linxea.com/",
    }

    constructor() {
        super(LinxeaCollector.CONFIG);
    }
}
