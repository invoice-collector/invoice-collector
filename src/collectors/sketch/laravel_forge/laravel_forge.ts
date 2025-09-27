
import { SketchCollector } from '../../sketchCollector';

export class LaravelForgeCollector extends SketchCollector {

    static CONFIG = {
        id: "laravel_forge",
        name: "Laravel Forge",
        description: "i18n.collectors.laravel_forge.description",
        version: "0",
        website: "https://forge.laravel.com/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28135.jpg",
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
        entryUrl: "https://forge.laravel.com/auth/login",
    }

    constructor() {
        super(LaravelForgeCollector.CONFIG);
    }
}
