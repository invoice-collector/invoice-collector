
import { SketchCollector } from '../../sketchCollector';

export class DanskSupermarkedCollector extends SketchCollector {

    static CONFIG = {
        id: "dansk_supermarked",
        name: "Dansk Supermarked",
        description: "i18n.collectors.dansk_supermarked.description",
        version: "0",
        website: "https://dansksupermarked.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21972.jpg",
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
        entryUrl: "https://dansksupermarked.com",
    }

    constructor() {
        super(DanskSupermarkedCollector.CONFIG);
    }
}
