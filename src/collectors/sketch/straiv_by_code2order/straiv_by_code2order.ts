
import { SketchCollector } from '../../sketchCollector';

export class StraivByCode2orderCollector extends SketchCollector {

    static CONFIG = {
        id: "straiv_by_code2order",
        name: "straiv by code2order",
        description: "i18n.collectors.straiv_by_code2order.description",
        version: "0",
        website: "https://start.straiv.io/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1751245.jpg",
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
        entryUrl: "https://start.straiv.io/users/sign_in",
    }

    constructor() {
        super(StraivByCode2orderCollector.CONFIG);
    }
}
