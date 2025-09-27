
import { SketchCollector } from '../../sketchCollector';

export class CanadianSolarCollector extends SketchCollector {

    static CONFIG = {
        id: "canadian_solar",
        name: "Canadian Solar",
        description: "i18n.collectors.canadian_solar.description",
        version: "0",
        website: "https://canadiansolar.us3.list-manage.com/subscribe/post?u=c9428931ef1d8f14e9b0616e1&id=43582f2947",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8906.jpg",
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
        entryUrl: "https://canadiansolar.us3.list-manage.com/subscribe/post?u=c9428931ef1d8f14e9b0616e1&id=43582f2947",
    }

    constructor() {
        super(CanadianSolarCollector.CONFIG);
    }
}
