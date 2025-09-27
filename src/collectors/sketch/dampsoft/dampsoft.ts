
import { SketchCollector } from '../../sketchCollector';

export class DampsoftCollector extends SketchCollector {

    static CONFIG = {
        id: "dampsoft",
        name: "Dampsoft",
        description: "i18n.collectors.dampsoft.description",
        version: "0",
        website: "https://shop.dampsoft.de/einkaufshistorie.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4582943.jpg",
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
        entryUrl: "https://shop.dampsoft.de/einkaufshistorie.aspx",
    }

    constructor() {
        super(DampsoftCollector.CONFIG);
    }
}
