
import { SketchCollector } from '../../sketchCollector';

export class SerplorerCollector extends SketchCollector {

    static CONFIG = {
        id: "serplorer",
        name: "Serplorer",
        description: "i18n.collectors.serplorer.description",
        version: "0",
        website: "https://tool.serplorer.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22903.jpg",
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
        entryUrl: "https://tool.serplorer.com/",
    }

    constructor() {
        super(SerplorerCollector.CONFIG);
    }
}
