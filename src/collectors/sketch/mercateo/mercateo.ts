
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MercateoCollector extends SketchCollector {

    static CONFIG = {
        id: "mercateo",
        name: "Mercateo",
        description: "i18n.collectors.mercateo.description",
        version: "0",
        website: "https://www.mercateo.com/login/?locale=de-DE&geoArea=deÂ®istration=customer&state=https%253A%252F%252Fwww.mercateo.com%252Fmy-mercateo%252FMEViewPlacedOrderHistory-Start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10528.jpg",
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
        entryUrl: "https://www.mercateo.com/login/?locale=de-DE&geoArea=deÂ®istration=customer&state=https%253A%252F%252Fwww.mercateo.com%252Fmy-mercateo%252FMEViewPlacedOrderHistory-Start",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MercateoCollector.CONFIG);
    }
}
