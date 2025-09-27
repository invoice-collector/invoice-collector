
import { SketchCollector } from '../../sketchCollector';

export class CellagonCollector extends SketchCollector {

    static CONFIG = {
        id: "cellagon",
        name: "Cellagon",
        description: "i18n.collectors.cellagon.description",
        version: "0",
        website: "https://beraterportal.cellagon.de/mein-cellagon/meine-informationen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/419723.jpg",
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
        entryUrl: "https://beraterportal.cellagon.de/mein-cellagon/meine-informationen/",
    }

    constructor() {
        super(CellagonCollector.CONFIG);
    }
}
