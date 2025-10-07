
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LaravelVaporCollector extends SketchCollector {

    static CONFIG = {
        id: "laravel_vapor",
        name: "Laravel Vapor",
        description: "i18n.collectors.laravel_vapor.description",
        version: "0",
        website: "https://vapor.laravel.com/app/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/492110.jpg",
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
        entryUrl: "https://vapor.laravel.com/app/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaravelVaporCollector.CONFIG);
    }
}
