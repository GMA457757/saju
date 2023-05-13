import { nopeResolver } from '@hookform/resolvers/nope'
import { NextPage } from 'next'
import Nope from 'nope-validator'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { MdPassword } from 'react-icons/md'

import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/input/Field'

import { AuthService } from '@/services/auth/auth.service'

const schema = Nope.object().shape({
	email: Nope.string().required('Email is required').email('Email is invalid'),
	password: Nope.string()
		.required('Password is required')
		.min(5, 'Minimum 6 simvol')
})

interface IEmailPassword {
	email: string
	password: string
}

const LoginPage: NextPage = () => {
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		resolver: nopeResolver(schema),
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = async ({
		email,
		password
	}) => {
		// reset()
		AuthService.login({ email, password })
	}
	return (
		<Layout title='Daxil ol'>
			<form
				className='container flex flex-col w-1/3 '
				onSubmit={handleSubmit(onSubmit)}
			>
				<Field
					{...formRegister('email')}
					placeholder='Email'
					error={errors.email?.message}
					label={'Ad *'}
					Icon={MdPassword}
				/>
				<Field
					{...formRegister('password')}
					placeholder='password'
					error={errors.password?.message}
					label={'Şifrə *'}
					type='password'
				/>
				<Button type='submit'>Login</Button>
			</form>
		</Layout>
	)
}

export default LoginPage

// Todo : extract diff component
