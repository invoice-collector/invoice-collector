
import { SketchCollector } from '../../sketchCollector';

export class RhespeedPlusportalDeCollector extends SketchCollector {

    static CONFIG = {
        id: "rhespeed_plusportal_de",
        name: "rhespeed.plusportal.de",
        description: "i18n.collectors.rhespeed_plusportal_de.description",
        version: "0",
        website: "https://rhespeed.plusportal.de/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/213146.jpg",
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
        entryUrl: "https://rhespeed.plusportal.de/#/",
    }

    constructor() {
        super(RhespeedPlusportalDeCollector.CONFIG);
    }
}
