import { nopeResolver } from '@hookform/resolvers/nope'
import Nope from 'nope-validator'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/button/Button'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import Field from '@/components/ui/input/Field'
import Radio from '@/components/ui/radio/Radio'

import ProfileLayout from '../layout/ProfileLayout'

const schema = Nope.object().shape({
	name: Nope.string().required('Adınızı daxil edin').trim(),
	surname: Nope.string().required('Soyadınızı daxil edin').trim(),
	birthDay: Nope.number('Yalnız rəqəm')
		.min(0, 'Yanlış məlumat')
		.max(32, 'Yanlış məlumat'),
	birthMonth: Nope.number('Yalnız rəqəm')
		.min(0, 'Yanlış məlumat')
		.max(13, 'Yanlış məlumat'),
	birthYear: Nope.number('Yalnız rəqəm')
		.min(1900, 'Yanlış məlumat')
		.max(2024, 'Yanlış məlumat'),
	phoneNumber: Nope.number('Yalnız rəqəm'),
	email: Nope.string()
		.required('Mütləq doldurulmalıdır')
		.trim()
		.email('Email adresinizi düzgün daxil edin')
})

const MyPersonalDetails: FC = () => {
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		resolver: nopeResolver(schema),
		mode: 'onChange'
	})

	// Todo : Connect to DB and minify this file. Code lines more 100 and typing all data
	return (
		<ProfileLayout>
			<Heading
				heading='Şəxsi məlumatlarım'
				description='Hesabınızın güncel olması için aşağıdaki ayrıntılardan herhangi birini düzenlemek için çekinmeyin.'
			/>
			<form className='flex flex-col gap-y-8'>
				<div className='flex gap-x-8'>
					<Field
						{...formRegister('name')}
						error={errors.name?.message}
						placeholder='Adınızı daxil edin'
						label='Ad *'
					/>
					<Field
						{...formRegister('surname')}
						error={errors.surname?.message}
						placeholder='Soydınızı daxil edin'
						label='Soyad *'
					/>
				</div>
				<div className='flex flex-col gap-y-3'>
					<span className='font-semibold'>Cinsiyyət</span>
					<div className='flex gap-x-8'>
						<Radio label='Qadın' name='gender' value='female' />
						<Radio label='Kişi' name='gender' value='male' defaultChecked />
					</div>
				</div>

				<div className='flex flex-col gap-y-3'>
					<span className='font-semibold'>Doğum tarixi</span>
					<div className='flex gap-x-8'>
						<Field
							{...formRegister('birthDay')}
							error={errors.birthDay?.message}
							type={'number'}
							placeholder='Gün'
							label='Gün'
						/>
						<Field
							{...formRegister('birthMonth')}
							error={errors.birthMonth?.message}
							type={'number'}
							placeholder='Ay'
							label='Ay'
						/>
						<Field
							{...formRegister('birthYear')}
							error={errors.birthYear?.message}
							type={'number'}
							placeholder='İl'
							label='İl'
						/>
					</div>
					<p className='text-sm text-black/50'>
						Sizə daha düzgün xidmət edə bilmək üçün bu məlumata ehtiyacımız var.
						Ayrıca olaraq doğum günündə bizdən bir supriz əldə edəcəksiz!
					</p>
				</div>

				<div className='flex flex-col gap-y-3'>
					<span className='font-semibold'>Əlaqə məlumatları</span>
					<div className='flex gap-x-8'>
						<Field
							{...formRegister('phoneNumber')}
							error={errors.phoneNumber?.message}
							type={'number'}
							placeholder='+994'
							label='Telefon nömrəsi'
						/>
						<Field
							{...formRegister('email')}
							error={errors.email?.message}
							placeholder='examlple@domain.com'
							label='Elektron poçt'
							defaultValue={'Roma@taiyo.blog'}
							verified={'Doğrulanmışdır'}
						/>
					</div>
				</div>

				<Checkbox label='Qeyd etdiyim e-poçt üzərindən, yeniliklərlə bağlı məlumat almaq istəyirəm' />

				<Button className='self-start'>Dəyişiklikləri yadda saxla</Button>
			</form>
		</ProfileLayout>
	)
}

export default MyPersonalDetails
