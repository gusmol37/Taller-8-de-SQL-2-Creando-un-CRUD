package com.sofka.service;

/**
 * @author Gustavo Molina <gusmol37@gmail.com>
 * @version 1.0.0 2022-06-30
 */


/**
 * Importación de las librerías
 */

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sofka.dao.ContactDao;
import com.sofka.domain.Contact;

@Service
public class ContactService implements IContactService {
	
	/**
	 * Métodos de la interfaz
	 */
	
	@Autowired 
	private ContactDao contactDao;

	@Override
	@Transactional(readOnly = true)
	public List<Contact> list() {
		return (List<Contact>) contactDao.findAll();
	}

	@Override
	@Transactional
	public Contact save(Contact contact) {
		return contactDao.save(contact);
	}

	@Override
	@Transactional
	public Contact update(Long id, Contact contact) {
		contact.setId(id);
		return contactDao.save(contact);
	}

	@Transactional
	public void updateName(Long id, Contact contact){
		contactDao.updateName(id, contact.getFullname());
	}

	@Transactional
	public void updatePhone(Long id, Contact contact){
		contactDao.updatePhone(id, contact.getPhone());
	}

	@Transactional
	public void updateEmail(Long id, Contact contact){
		contactDao.updateEmail(id, contact.getEmail());
	}

	@Transactional
	public void updateBirthdate(Long id, Contact contact){
		contactDao.updateBirthdate(id, contact.getBirthdate());
	}

	@Transactional
	public void updateDeleted(Long id){
		contactDao.updateDeleted(id);
	}

	@Override
	@Transactional
	public void delete(Contact contact) {
		contactDao.delete(contact);
	}

	@Override
	@Transactional(readOnly = true)
	public Optional<Contact> findContact(Contact contact) {
		return contactDao.findById(contact.getId());
	}

}
