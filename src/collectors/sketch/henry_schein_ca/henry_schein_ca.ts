
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HenryScheinCaCollector extends SketchCollector {

    static CONFIG = {
        id: "henry_schein_ca",
        name: "Henry Schein CA",
        description: "i18n.collectors.henry_schein_ca.description",
        version: "0",
        website: "https://www.henryschein.ca/ca-en/Dental/Default.aspx?did=Dental-CA",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/405658.jpg",
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
        loginUrl: "https://www.henryschein.ca/ca-en/Dental/Default.aspx?did=Dental-CA",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HenryScheinCaCollector.CONFIG);
    }
}
