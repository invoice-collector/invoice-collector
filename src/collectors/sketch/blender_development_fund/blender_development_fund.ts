
import { SketchCollector } from '../../sketchCollector';

export class BlenderDevelopmentFundCollector extends SketchCollector {

    static CONFIG = {
        id: "blender_development_fund",
        name: "Blender Development Fund",
        description: "i18n.collectors.blender_development_fund.description",
        version: "0",
        website: "https://fund.blender.org/settings/receipts/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973184.jpg",
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
        entryUrl: "https://fund.blender.org/settings/receipts/",
    }

    constructor() {
        super(BlenderDevelopmentFundCollector.CONFIG);
    }
}
