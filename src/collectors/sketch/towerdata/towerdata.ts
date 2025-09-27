
import { SketchCollector } from '../../sketchCollector';

export class TowerdataCollector extends SketchCollector {

    static CONFIG = {
        id: "towerdata",
        name: "TowerData",
        description: "i18n.collectors.towerdata.description",
        version: "0",
        website: "https://instantdata.towerdata.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8829.jpg",
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
        entryUrl: "https://instantdata.towerdata.com/",
    }

    constructor() {
        super(TowerdataCollector.CONFIG);
    }
}
