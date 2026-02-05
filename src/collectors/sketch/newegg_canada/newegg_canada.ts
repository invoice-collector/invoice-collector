
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NeweggCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "newegg_canada",
        name: "Newegg Canada",
        description: "i18n.collectors.newegg_canada.description",
        version: "0",
        website: "https://secure.newegg.ca/NewMyAccount/CartDetail.aspx?CartID=f8sAISU8521nrieBsZRtsNw0yuZrte1s6u%2bv5sObNpgqz42zw6Va11uQWnCr4KmVF3%2bq0WVmuvWCl8tY5TPcN%2bjTJ2C2OFM2anMjjfWgWfU%3d",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/385999.jpg",
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
        loginUrl: "https://secure.newegg.ca/NewMyAccount/CartDetail.aspx?CartID=f8sAISU8521nrieBsZRtsNw0yuZrte1s6u%2bv5sObNpgqz42zw6Va11uQWnCr4KmVF3%2bq0WVmuvWCl8tY5TPcN%2bjTJ2C2OFM2anMjjfWgWfU%3d",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NeweggCanadaCollector.CONFIG);
    }
}
