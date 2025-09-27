
import { SketchCollector } from '../../sketchCollector';

export class SalesloftCollector extends SketchCollector {

    static CONFIG = {
        id: "salesloft",
        name: "SalesLoft",
        description: "i18n.collectors.salesloft.description",
        version: "0",
        website: "https://accounts.salesloft.com/sign_in?return_to=https://app.salesloft.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/822013.jpg",
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
        entryUrl: "https://accounts.salesloft.com/sign_in?return_to=https://app.salesloft.com",
    }

    constructor() {
        super(SalesloftCollector.CONFIG);
    }
}
