
import { SketchCollector } from '../../sketchCollector';

export class FlywheelManagedHostingCollector extends SketchCollector {

    static CONFIG = {
        id: "flywheel_managed_hosting",
        name: "Flywheel Managed Hosting",
        description: "i18n.collectors.flywheel_managed_hosting.description",
        version: "0",
        website: "https://app.getflywheel.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31245.jpg",
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
        entryUrl: "https://app.getflywheel.com/login",
    }

    constructor() {
        super(FlywheelManagedHostingCollector.CONFIG);
    }
}
