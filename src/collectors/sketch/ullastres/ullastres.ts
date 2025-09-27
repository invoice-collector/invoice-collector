
import { SketchCollector } from '../../sketchCollector';

export class UllastresCollector extends SketchCollector {

    static CONFIG = {
        id: "ullastres",
        name: "Ullastres",
        description: "i18n.collectors.ullastres.description",
        version: "0",
        website: "https://oficinavirtual.ullastres.com/user/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4396036.jpg",
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
        entryUrl: "https://oficinavirtual.ullastres.com/user/home",
    }

    constructor() {
        super(UllastresCollector.CONFIG);
    }
}
