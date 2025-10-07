
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NetflixRuCollector extends SketchCollector {

    static CONFIG = {
        id: "netflix_ru",
        name: "Netflix RU",
        description: "i18n.collectors.netflix_ru.description",
        version: "0",
        website: "https://www.netflix.com/ee-ru/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1373967.jpg",
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
        entryUrl: "https://www.netflix.com/ee-ru/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NetflixRuCollector.CONFIG);
    }
}
