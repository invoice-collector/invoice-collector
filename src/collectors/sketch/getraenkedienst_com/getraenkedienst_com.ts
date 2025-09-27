
import { SketchCollector } from '../../sketchCollector';

export class GetraenkedienstComCollector extends SketchCollector {

    static CONFIG = {
        id: "getraenkedienst_com",
        name: "getraenkedienst.com",
        description: "i18n.collectors.getraenkedienst_com.description",
        version: "0",
        website: "https://www.getraenkedienst.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49132.jpg",
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
        entryUrl: "https://www.getraenkedienst.com/account",
    }

    constructor() {
        super(GetraenkedienstComCollector.CONFIG);
    }
}
