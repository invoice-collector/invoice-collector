
import { SketchCollector } from '../../sketchCollector';

export class _3asRacingCollector extends SketchCollector {

    static CONFIG = {
        id: "3as_racing",
        name: "3AS RACING",
        description: "i18n.collectors.3as_racing.description",
        version: "0",
        website: "https://www.3as-racing.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115873.jpg",
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
        entryUrl: "https://www.3as-racing.com/",
    }

    constructor() {
        super(_3asRacingCollector.CONFIG);
    }
}
