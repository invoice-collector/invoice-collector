
import { SketchCollector } from '../../sketchCollector';

export class CentralepneusCollector extends SketchCollector {

    static CONFIG = {
        id: "centralepneus",
        name: "CentralePneus",
        description: "i18n.collectors.centralepneus.description",
        version: "0",
        website: "https://www.centralepneus.fr/mon-compte/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117752.jpg",
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
        entryUrl: "https://www.centralepneus.fr/mon-compte/",
    }

    constructor() {
        super(CentralepneusCollector.CONFIG);
    }
}
