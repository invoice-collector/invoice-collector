
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TerraformCollector extends SketchCollector {

    static CONFIG = {
        id: "terraform",
        name: "Terraform",
        description: "i18n.collectors.terraform.description",
        version: "0",
        website: "https://app.terraform.io/app/FINVIA/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2066549.jpg",
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
        entryUrl: "https://app.terraform.io/app/FINVIA/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TerraformCollector.CONFIG);
    }
}
