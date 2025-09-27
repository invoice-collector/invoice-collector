
import { SketchCollector } from '../../sketchCollector';

export class SpatialCollector extends SketchCollector {

    static CONFIG = {
        id: "spatial",
        name: "Spatial",
        description: "i18n.collectors.spatial.description",
        version: "0",
        website: "https://billing.stripe.com/session/live_YWNjdF8xRjhWN2FCN1F0RWV6bjdNLF9MZXJLZlo4R2EwRklJYWhrdk5rNUhpZ2xBQkppUFo10100JNILus9k",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1248085.jpg",
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
        entryUrl: "https://billing.stripe.com/session/live_YWNjdF8xRjhWN2FCN1F0RWV6bjdNLF9MZXJLZlo4R2EwRklJYWhrdk5rNUhpZ2xBQkppUFo10100JNILus9k",
    }

    constructor() {
        super(SpatialCollector.CONFIG);
    }
}
