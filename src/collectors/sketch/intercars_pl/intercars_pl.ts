
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IntercarsPlCollector extends SketchCollector {

    static CONFIG = {
        id: "intercars_pl",
        name: "InterCars - PL",
        description: "i18n.collectors.intercars_pl.description",
        version: "0",
        website: "https://pl.e-cat.intercars.eu/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4514262.jpg",
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
        entryUrl: "https://pl.e-cat.intercars.eu",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IntercarsPlCollector.CONFIG);
    }
}
