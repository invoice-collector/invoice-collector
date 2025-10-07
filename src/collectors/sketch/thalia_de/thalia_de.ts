
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ThaliaDeCollector extends SketchCollector {

    static CONFIG = {
        id: "thalia_de",
        name: "Thalia.de",
        description: "i18n.collectors.thalia_de.description",
        version: "0",
        website: "https://www.thalia.de/shop/home/login/login/?_token=5826bcba-526b-4d5b-bcb5-a836f66341a6",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34142.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.thalia.de/shop/home/login/login/?_token=5826bcba-526b-4d5b-bcb5-a836f66341a6",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ThaliaDeCollector.CONFIG);
    }
}
