
import { SketchCollector } from '../../sketchCollector';

export class GreatcontentCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "greatcontent_co_uk",
        name: "GreatContent.co.uk",
        description: "i18n.collectors.greatcontent_co_uk.description",
        version: "0",
        website: "https://www.greatcontent.co.uk/common/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/433.jpg",
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
        entryUrl: "https://www.greatcontent.co.uk/common/login",
    }

    constructor() {
        super(GreatcontentCoUkCollector.CONFIG);
    }
}
