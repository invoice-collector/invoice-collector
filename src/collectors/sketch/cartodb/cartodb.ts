
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CartodbCollector extends SketchCollector {

    static CONFIG = {
        id: "cartodb",
        name: "CartoDB",
        description: "i18n.collectors.cartodb.description",
        version: "0",
        website: "https://carto.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137050.jpg",
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
        entryUrl: "https://carto.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CartodbCollector.CONFIG);
    }
}
