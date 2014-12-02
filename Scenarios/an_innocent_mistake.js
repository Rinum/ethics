Scenario = {
	"name": "CASE: An Innocent Mistake",
	"first_scene": "0",
	"scenes": {
		"0": {
			"image": "hospital.jpg",
			"text": "You are a Pharmacist at UI Hospital. You receive an order for IV amiodarone 1.8 mg/mL to be infused over 3 hours.",
			"options": [
				{
					"text": "Give the order to your technician",
					"scene": "technician_fills_order"
				},
				{
					"text": "You're near the end of your work queue anyway so you can prepare the order yourself",
					"scene": "pharmacist_fills_order"
				},
				{
					"text": "Skip the order (it's just a maintenance infusion anyway) for now and move on to the next item in the queue.",
					"scene": "skip_order"
				}
			]
		},
		"skip_order": {
			"text": "You skip the amiodarone order, but 3 hours pass and it hasn't been filled yet. The doctor who ordered the amiodarone has been calling the pharmacy asking for it.",
			"options": [
				{
					"text": "Give the order to your technician",
					"scene": "technician_fills_order"
				},
				{
					"text": "Prepare the order yourself because your technician is busy",
					"scene": "pharmacist_fills_order"
				}
			]
		},
		"technician_fills_order": {
			"image": "iv_room.jpg",
			"text": "Your technician prepares the order and you check their work finding no errors.",
			"options": [
				{
					"text": "Send the amiodarone with proper instructions",
					"scene": "send_amiodarone"
				},
				{
					"text": "Double check for mistakes",
					"scene": "double_check_order"
				}
			]
		},
		"pharmacist_fills_order": {
			"image": "iv_room.jpg",
			"text": "Your technician looked pretty busy so you decide to prepare the amiodarone IV bag yourself.",
			"options": [
				{
					"text": "Send the amiodarone with proper instructions",
					"scene": "send_amiodarone"
				},
				{
					"text": "Double check for mistakes",
					"scene": "double_check_order"
				}
			]
		},
		"double_check_order": {
			"image": "calculations.png",
			"text": "You double check all calculations and it looks good.",
			"options": [
				{
					"text": "Send the amiodarone with proper instructions",
					"scene": "send_amiodarone"
				}
			]
		},
		"send_amiodarone": {
			"image": "iv_bag.jpg",
			"text": "The IV amiodarone leaves the pharmacy with instructions for the infusion rates that the nurse will set. 45 minutes pass and you receive a similar order for amiodarone, but for a different patient and it's wanted STAT.",
			"options": [
				{
					"text": "Give the order to your technician",
					"scene": "technician_fills_second_order"
				},
				{
					"text": "Prepare the order yourself",
					"scene": "pharmacist_fills_second_order"
				}
			]
		},
		"technician_fills_second_order": {
			"image": "amiodarone_vials.png",
			"text": "Your technician prepares the order and you discover that the technician used the 900 mg vial of amiodarone instead of the 450 mg! The vial used to fill the previous order looked exactly the same! You thought the 900 mg vials were the ones with a red cap and 450 mg with a silver cap. For some reason this 900 mg vial had a silver cap on it! You search for the other vial and find it. The vial reads \"900 mg\".",
			"options": [
				{
					"text": "You come up with the brilliant plan to change the infusion rate to 1/2 of what it is currently. Patient will receive the correct dose at a safe infusion rate.",
					"scene": "operation_change_infusion_rate"
				},
				{
					"text": "Having already been warned for making too many mistakes you know that this will likely cost you your job (possibly career), but decide to report it and stop the infusion.",
					"scene": "report_the_mistake"
				},
				{
					"text": "Meh, mistakes happen and no one has complained so far (the IV bag was still labeled as 450 mg so no one knows). You decide to do nothing instead of risking your job.",
					"scene": "do_nothing"
				}
			]
		},
		"pharmacist_fills_second_order": {
			"image": "amiodarone_vials.png",
			"text": "You prepare the order and you discover that the vial you used has \"900 mg\" written on it instead of 450 mg! The vial used to fill the previous order looked exactly the same! You thought the 900 mg vials were the ones with a red cap and 450 mg with a silver cap. For some reason this 900 mg vial had a silver cap on it! You search for the other vial and find it. The vial reads \"900 mg\".",
			"options": [
				{
					"text": "You come up with the brilliant plan to change the infusion rate and make everything right.",
					"scene": "operation_change_infusion_rate"
				},
				{
					"text": "Having already been warned for making too many mistakes you know that this will likely cost you your job (possibly career), but decide to report it and stop the infusion.",
					"scene": "report_the_mistake"
				},
				{
					"text": "Meh, mistakes happen and no one has complained so far (the IV bag was still labeled as 450 mg so no one knows). You know that the patient will be fine because he's been perfectly stable. You decide to do nothing instead of risking your job.",
					"scene": "do_nothing"
				}
			]
		},
		"do_nothing": {
			"image": "cardiac_arrest.jpg",
			"text": "You decide to do nothing with the error and tell your technician to not tell anyone what happened. The next day you find out the patient experienced cardiac arrest overnight and passed away. Upon hearing this news the technician reported everything that happened. You've been fired effective immediately, but that's just the beginning of your troubles..."
		},
		"report_the_mistake": {
			"image": "root_cause.jpg",
			"text": "You report the error and the infusion is corrected. The hospital performs a root cause analysis and discovers that the manufacturer's vial changes are to be partially blamed. You are still disciplined for not double checking the vial label, but get to keep your job. The patient is okay too."
		},
		"operation_change_infusion_rate": {
			"image": "doctor.jpg",
			"text": "The patient is asleep and the patient's room is empty. You enter the patient's room and begin to decrease the infusion rate. You hear someone enter the room. \n\n Doctor: Hey, how's it going? \n\n The doctor notices your name tag and realizes you're a Pharmacist. \n\n Doctor: Something wrong?",
			"options": [
				{
					"text": "\"Not right now.\"",
					"scene": "not_right_now"
				},
				{
					"text": "\"We're just changing the administration rate.\"",
					"scene": "spew_a_fact"
				},
				{
					"text": "\"I'm just double checking something, making sure everything's good.\"",
					"scene": "making_sure_everything_is_good"
				},
				{
					"text": "\"A mistake was made on the instructions so we're just correcting it.\"",
					"scene": "correcting_mistake"
				},
				{
					"text": "Tell the whole truth so that the error can be reported and the infusion is corrected",
					"scene": "report_the_mistake"
				}
			]
		},


		"not_right_now": {
			"image": "doctor_1.jpg",
			"text": "Doctor: \"Umm, okay, good.\"",
			"options": [
				{
					"text": "\"Yeah, the patient is doing just fine. I should get going, plenty of orders to fill.\"",
					"scene": ""
				},
				{
					"text": "\".\"",
					"scene": ""
				}
			]
		},
		"spew_a_fact": {
			"image": "doctor_2.jpg",
			"text": "Doctor: \"I wasn't aware that the rate needed changing. Why wasn't I notified? Was there a problem with my order?\""
		},
		"making_sure_everything_is_good": {
			"image": "doctor.jpg",
			"text": "Doctor: \"And is everything good?\""
		},
		"correcting_mistake": {
			"image": "doctor_3.jpg",
			"text": "Doctor: \"I wasn't made aware of any mistake. Was there a problem with my order?\"",
			"options": [
				{
					"text": "\"The order was fine, there was just a misprint on the label that we wanted to fix.\"",
					"scene": ""
				},
				{
					"text": "\"No problem with the order, we just made a mistake in filling the order so I rushed down here so I could \""
				}
			]
		}
	}
};