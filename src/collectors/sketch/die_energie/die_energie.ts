
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DieEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "die_energie",
        name: "Die Energie",
        description: "i18n.collectors.die_energie.description",
        version: "0",
        website: "https://www.kundenonlineservice.de/powercommerce/fk-elv/action/flightteaser;jsessionid=66305684A43DA3E325824415FBA3A972?gap=3283",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/533897.jpg",
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
        entryUrl: "https://www.kundenonlineservice.de/powercommerce/fk-elv/action/flightteaser;jsessionid=66305684A43DA3E325824415FBA3A972?gap=3283",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DieEnergieCollector.CONFIG);
    }
}
