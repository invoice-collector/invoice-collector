
import { SketchCollector } from '../../sketchCollector';

export class HeemskerkFlowersCollector extends SketchCollector {

    static CONFIG = {
        id: "heemskerk_flowers",
        name: "HEEMSKERK FLOWERS",
        description: "i18n.collectors.heemskerk_flowers.description",
        version: "0",
        website: "https://www.heemskerkflowers.com/service/facturen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/849541.jpg",
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
        entryUrl: "https://www.heemskerkflowers.com/service/facturen",
    }

    constructor() {
        super(HeemskerkFlowersCollector.CONFIG);
    }
}
